import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (conversationId: string) => {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
        return [];
    }

    try {
        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true,
            }
        });

        return conversation;
    } catch (error: any) {
        return [];
    }

}

export default getConversationById;