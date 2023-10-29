import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherSever } from "@/app/libs/pusher";

interface IParams {
    conversationId?: string;
}

export async function DELETE (
    request: Request,
    { params }:  { params: IParams }
) {
    try {
        const { conversationId } = params;
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
        const existingConversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        });
        if (!existingConversation) {
            return new NextResponse('Not Found', { status: 404 });
        }

        const deletedConversation = await prisma.conversation.deleteMany({
            where: {
                id: conversationId,
                userIds: {
                    hasSome: [currentUser.id]
                }
            }
        });
        
        existingConversation.users.forEach((user) => {
            if (user.email) {
                pusherSever.trigger(user.email, 'conversation:delete', existingConversation);
            }
        })

        return  NextResponse.json(deletedConversation);
    } catch (error: any) {
        console.error(error, 'ERROR_DELETE_CONVERSATION');
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}