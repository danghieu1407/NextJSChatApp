"use client"

import { useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Conversation, User, Message } from "@prisma/client"
import {format} from "date-fns"
import { useSession } from "next-auth/react"
import clsx from "clsx"
import { FullConversationType } from "@/app/types"
import useOtherUser from "@/app/hooks/useOtherUser"
import Avatar from "@/app/components/Avatar"
import { da } from "date-fns/locale"
import AvatarGroup from "@/app/components/AvatarGroup"

interface ConversationItemProps {
    data: FullConversationType;
    selected?: boolean;
}
const ConversationItem:React.FC<ConversationItemProps> = ({
    data,
    selected,
}) => {
    const otheruser = useOtherUser(data);
    const router = useRouter();
    const session = useSession();

    const handleClick = useCallback(() => {
        router.push(`/conversation/${data.id}`);
    }, [data, router]);

    const lastMessage = useMemo(() => {
        const message = data.messages || [];
        return message[message.length - 1];
    }, [data.messages]);

    const userEmail = useMemo(() => {
        return session.data?.user?.email;
    }, [session.data?.user?.email]);

    const hasSeen = useMemo(() => {
        if(!lastMessage) return false;
        const seen = lastMessage.seen || [];
        return seen.filter((user) => user.email === userEmail).length !== 0;
    }, [userEmail, lastMessage]);

    const lastMessageText = useMemo(() => {
        if(lastMessage?.image) {
            return 'Sent an Image';
        }

        if (lastMessage?.body) {
            return lastMessage.body;
        }   

        return 'Start a conversation';
    }, [lastMessage]);

    return (
        <div 
            onClick={handleClick}
            className={clsx(`w-full relative flex items-center space-x-3 p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer`, selected ? 'bg-neutral-100' : 'bg-white')}
        >
            {data.isGroup ? ( 
                <AvatarGroup users={data.users}/>
            ) :  (<Avatar user={otheruser}/>)
            }
           
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-md font-medium text-gray-900 float-right">
                            {data.name || otheruser.name}
                        </p>
                        {lastMessage?.createdAt && (
                            <p className="
                            text-xs text-gray-400
                            font-light"> {format(new Date(lastMessage?.createdAt), 'p')}
                        </p>
                        )}
                    </div>
                    <p className={
                        clsx(`truncate text-sm`, hasSeen ? 'text-gray-500' : 'text-black font-medium')
                    }>
                        {lastMessageText }
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ConversationItem