import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { pusherSever } from "@/app/libs/pusher";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            userId,
            isGroup,
            members,
            name,
        } = body;

        if (!currentUser) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        if (isGroup && (!members || members.length < 2)) {
            return new NextResponse('Bad Request', { status: 400 });
        }

        if (isGroup) {
            const newConversation = await prisma.conversation.create({
                data: {
                    isGroup,
                    name,
                    users: {
                        connect: [
                            ...members.map((member: {value: string}) => ({ id: member.value })),
                            { id: currentUser.id }
                        ]
                    }
                },
                include: {
                    users: true
                }
            });
            newConversation.users.forEach((user) => {
                if (user.email) {
                    pusherSever.trigger(user.email, 'conversation:new', newConversation);
                }
            });

            return new NextResponse(JSON.stringify(newConversation), { status: 200 });
        }

        const existingConversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [currentUser.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currentUser.id]
                        }
                    }
                ]
            },
        });

        const singleConversation = existingConversations[0];
        if (singleConversation) {
            return new NextResponse(JSON.stringify(singleConversation), { status: 200 });
        }

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        { id: userId },
                        { id: currentUser.id }
                    ]
                }
            },
            include: {
                users: true
            }
        });

        newConversation.users.forEach((user) => {
            if (user.email) {
                pusherSever.trigger(user.email, 'conversation:new', newConversation);
            }
        });

        return new NextResponse(JSON.stringify(newConversation), { status: 200 });
    } catch (error: any) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}