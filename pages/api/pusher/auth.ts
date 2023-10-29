import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { pusherSever } from "@/app/libs/pusher";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const session = await getServerSession(request, response, authOptions);
    if (!session?.user?.email) {
        return response.status(401).json({message: "Unauthorized"});
    }

    const socketId = request.body.socket_id;
    const chanel = request.body.channel_name;
    const data = {
        user_id: session.user.email,
    }

    const authResponse = pusherSever.authorizeChannel(socketId, chanel, data);

    return response.send(authResponse);
}