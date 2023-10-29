import PusherSever from "pusher";
import PuhserClient from "pusher-js";

export const pusherSever = new PusherSever({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: 'ap1',
    useTLS: true,
});

export const pusherClient = new PuhserClient(
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    {
        channelAuthorization: {
            endpoint: '/api/pusher/auth',
            transport: 'ajax'
        },
        cluster: 'ap1',
    }
) 