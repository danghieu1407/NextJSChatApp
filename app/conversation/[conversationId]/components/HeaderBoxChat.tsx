"use client"

import Avatar from "@/app/components/Avatar"
import useOtherUser from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import Link from "next/link"
import { useMemo, useState } from "react"
import { HiChevronLeft } from 'react-icons/hi2'
import { HiEllipsisHorizontal } from "react-icons/hi2"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import Profile from "./Profile"
import AvatarGroup from "@/app/components/AvatarGroup"
import useActiveList from "@/app/hooks/useActiveList"
import { is } from "date-fns/locale"

interface HeaderBoxChatProps {
    conversation: Conversation & {
        users: User[]
    }
}
const HeaderBoxChat: React.FC<HeaderBoxChatProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation)
    const [ profileOpen, setProfileOpen ] = useState(false)
    const {members} = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1
    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`
        }

        return isActive ? 'Active' : 'Offline';
    }, [conversation, isActive])
    return (
        <>
            <Profile data={conversation} isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
            <div className="
        bg-white
        w-full
        flex
        border-b-[1px]
        sm:px-4
        py-3
        px-4
        lg:px-6
        justify-between
        items-center
        shadow-sm
        ">
                <div className="
            flex
            gap-3
            items-center
            ">
                    <Link
                        className="
                block
                lg:hidden
                text-sky-500
                hover:text-sky-600
                transition
                cursor-pointer
                "
                        href="/conversation"
                    >
                        <HiChevronLeft size={32} />
                    </Link>
                    {conversation.isGroup ?(
                        <AvatarGroup users={conversation.users} />
                    ) : (
                        <Avatar user={otherUser} />
                    )}
                    <div className="flex flex-col">
                        {conversation.name || otherUser?.name}
                        <div className="text-sm font-light text-neutral-500">
                            {statusText}
                        </div>
                    </div>
                </div>
                <div className="flex gap-6  items-center ">
                    <BsFillTelephoneFill
                        size={24}
                        onClick={() => { }}
                        className="
                    text-pink-400
                    cursor-pointer
                    hover:text-pink-600
                    transition"
                    />

                    <FaVideo
                        size={32}
                        onClick={() => { }}
                        className="
                    text-pink-400
                    cursor-pointer
                    hover:text-pink-600
                    transition"
                    />

                    <HiEllipsisHorizontal
                        size={32}
                        onClick={() => setProfileOpen(true)}
                        className="
                    text-pink-400
                    cursor-pointer
                    hover:text-pink-600
                    transition"
                    />
                </div>
            </div>
        </>
    )
}

export default HeaderBoxChat