import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getUsers = async () => {
    const session = await getSession();

    if (!session?.user?.email) {
        return [];
    }
    try {
        const users = await prisma.user.findMany({
            where: {
                email: {
                    not: session.user.email as string
                }
            },
            orderBy: {
                name: 'asc'
            }
        });
        return users;
    } catch (error:any) {
        return [];
    }
}
export default getUsers;