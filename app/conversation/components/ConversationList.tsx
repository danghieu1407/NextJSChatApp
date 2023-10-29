"use client"

import { FullConversationType } from "@/app/types"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import useConversation from "@/app/hooks/useConversation";
import clsx from "clsx";
import {MdOutlineGroupAdd} from 'react-icons/md';
import ConversationItem from "./ConversationItem";
import GroupChatModal from "./GroupChatModal";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";

interface ConversationListProps {
    Items: FullConversationType[];
    users: User[]
}

const ConversationList: React.FC<ConversationListProps>= ({
    Items,
    users
}) => {
    const [items, setItems] = useState(Items);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const session = useSession();
    const router = useRouter();
    const pusherKey = useMemo(() => {
        return session.data?.user?.email;
    }, [session.data?.user?.email]);

    useEffect(() => {
        if (!pusherKey) return;

        pusherClient.subscribe(pusherKey);
        const newHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                if (find(current, {id: conversation.id})) return current;
                
                return [conversation, ...current];
            })
        }
        const updateHandler = (conversation: FullConversationType) => {
            setItems((current) => current.map((currentConversation) => {
                if (currentConversation.id === conversation.id) {
                    return {
                        ...currentConversation,
                        messages: conversation.messages,
                    }
                }
                return currentConversation;
            }))
        }
        const removeHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                return [...current.filter((currentConversation) => currentConversation.id !== conversation.id) ]
            })

            if (conversationId === conversation.id) {
                router.push('/conversation');
            }
        }
        pusherClient.bind('conversation:new', newHandler);
        pusherClient.bind('conversation:update', updateHandler);
        pusherClient.bind('conversation:delete', removeHandler);
        return () => {
            pusherClient.unsubscribe(pusherKey);
            pusherClient.unbind('conversation:new', newHandler);
            pusherClient.unbind('conversation:update', updateHandler);
            pusherClient.unbind('conversation:delete', removeHandler);
        }
    },[pusherKey, router])
    const {conversationId, isOpen} = useConversation();

    return (
       <>
       <GroupChatModal users={users} isOpen={isModalOpen} onClose={()=> setIsModalOpen(false)}/>
        <aside
            className={clsx(`
            fixed
            inset-y-0
            pb-20
            lg:pb-0
            lg:left-20
            lg:w-80
            lg:block
            overflow-y-auto
            border-r
            border-gray-200
            `, isOpen ? 'hidden' : 'block w-full left-0')}
        >
            <div className="px-5">
                <div className="flex justify-between mb-4 pt-4">
                    <div className="text-2xl font-bold text-neutral-800">
                        Inbox
                    </div>
                    <div className="rounded-full p-2 bg-gray-100 cursor-pointer text-gray-600 hover:opacity-75 transition" onClick={()=> setIsModalOpen(true)}>
                        <MdOutlineGroupAdd size={20}/>
                    </div>
                </div>
                {items?.map((item) => (
                    <ConversationItem
                        key={item.id}
                        data={item}
                        selected={item.id === conversationId}
                    />
                ))}
            </div>
        </aside>
       </>
    )
}
export default ConversationList