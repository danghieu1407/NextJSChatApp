"use client"

import { Conversation, User } from "@prisma/client";
import  useOtherUser  from "@/app/hooks/useOtherUser";
import { format, set } from "date-fns";
import { useMemo, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose, IoTrash } from "react-icons/io5";
import Avatar from "@/app/components/Avatar";
import Modal from "@/app/components/Modal";
import ConfirmModal from "./ConfirmModal";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface ProfileProps {
    isOpen: boolean;
    onClose: () => void;
    data: Conversation & {
        users: User[]
    }
}

const Profile: React.FC<ProfileProps> = ({
    isOpen,
    onClose,
    data
}) => {
    const otherUser = useOtherUser(data)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {members} = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;
    const joinDate = useMemo(() => {
        return format(new Date(data.createdAt), 'PP')
    }, [otherUser.createdAt])

    const title = useMemo(() => {
        return data.name || otherUser.name
    }, [data.name, otherUser.name])

    const statusText = useMemo(() => {
        if(data.isGroup) {
            return `${data.users.length} members`
        }

        return isActive ? 'Active' : 'Offline';
    }, [data, isActive])
    return (
        <>
            <ConfirmModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <div className="bg-white p-5">
                    <p>hello modal</p>
                </div>
            </ConfirmModal>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className='relative z-50' onClose={onClose}>
                    <Transition.Child as={Fragment} enter="ease-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in transition-opacity duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                        {/* <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" /> */}
                        <div className="fixed inset-0 bg-black bg-opacity-40"/>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden ">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-0 right-0 max-w-full pl-10">
                                <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="
                                    pointer-events-auto
                                    h-screen
                                    max-w-md
                                    float-right
                                    w-full
                                    overflow-hidden
                                    ">
                                        <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 flex h-7 items-ce nter">
                                                        <button type="button" onClick={onClose}
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 outline-none focus:outline-none focus:ring-sky-500 focung:ring-offset-2 focus:ring-2">
                                                            <span className="sr-only"> Cloes</span>
                                                            <IoClose className="h-6 w-6" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px -4 sm:px-6">
                                                <div className="flex flex-col items-center">
                                                        <div className="mb-2">
                                                            {data.isGroup ? (
                                                                <AvatarGroup users={data.users} />
                                                            ) : (
                                                                <Avatar user ={otherUser}/>
                                                            )}
                                                        </div>
                                                        <div>
                                                            {title}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {statusText}
                                                        </div>
                                                        <div className=" z-50 flex gap-10 my-8  hover:opacity-50">
                                                                <div onClick={()=>setIsModalOpen(true)}
                                                                className=" flex flex-col gap-3 items-center cursor-pointer ">
                                                                    <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:opacity-55">
                                                                        <IoTrash className="h-6 w-6"  />
                                                                    </div>
                                                                    <div className="text-sm font-light text-neutral-600">Delete</div>
                                                                </div>
                                                        </div>
                                                        <div className="w-full pb-5 pt-5 sm:px-0 sm:pt-0">
                                                            <dl className="space-y-8 px-4 sm:spcae-y-6 sm:px-6">
                                                                {data.isGroup && (
                                                                    <div>
                                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                                                            Email
                                                                        </dt>
                                                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                                                            {data.users.map((user) => user.email).join('\n')}
                                                                        </dd>
                                                                    </div>
                                                                )}
                                                                {!data.isGroup && (
                                                                    <div>
                                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"> Email</dt>
                                                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{otherUser.email}</dd>
                                                                    </div>
                                                                    )}
                                                                    {!data.isGroup && (
                                                                        <>
                                                                            <hr />
                                                                            <div>
                                                                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Joined </dt>
                                                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{joinDate}</dd>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                            </dl>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>

                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
export default Profile