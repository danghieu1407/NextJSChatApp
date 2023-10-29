import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import Prisma from "@/app/libs/prismadb";
import { pusherSever } from "@/app/libs/pusher";
interface IPrams {
    conversationId?: string;
}

export async function POST(
    request: Request,
    {params}: {params: IPrams}
) {
    try {
        const currentUser = await getCurrentUser();
        const {
            conversationId
        } = params;
        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse("Unauthorized", {status: 401});
        }
        const conversation = await Prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                messages: {
                    include: {
                        seen: true
                    }
                },
                users: true
            }
        });


        if (!conversation) {
            return new NextResponse("Invalid Id", {status: 400});
        }
    

        // Find last message
        const lastMessage = conversation.messages[conversation.messages.length - 1];

        if (!lastMessage) {
            return  NextResponse.json(conversation);
        }

        // update last seen message
        const updatedMessage = await Prisma.message.update({
            where: {
                id: lastMessage.id
            },
            include: {
                sender: true,
                seen: true
            },
            data: {
                seen: {
                    connect: {
                        id: currentUser.id
                    }
                }
            }
        });

        await pusherSever.trigger(currentUser.email, "conversation:update", {
            id: conversationId,
            messages: [updatedMessage]
        });

        if(lastMessage.seenIds.indexOf(currentUser.id) !== -1) {
            return NextResponse.json(conversation);
        }

        await pusherSever.trigger(conversationId!, 'message:update', updatedMessage);

        return NextResponse.json(updatedMessage);

    } catch (error: any) {
        return new NextResponse("Internal Server Error", {status: 500});
    }
}