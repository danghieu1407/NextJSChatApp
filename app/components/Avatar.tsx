"use client"
import { User } from '@prisma/client';
import Image from 'next/image';
import useActiveList from '../hooks/useActiveList';
interface AvatarProps {
    user?: User;
}

const Avatar:React.FC<AvatarProps> =({
    user
}) => {
    const {members} = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1
    return (
        <div className="relative">
            <div className='
        relative
        inline-block
        rounded-full
        overflow-hidden
        h-9
        w-9
        md:h-11
        md:w-11
        '>
            <Image src={user?.image || '/images/DefaultAvatar.png' }
            alt='Avatar'
            height={100}
            width={100}
            className='object-cover
            w-full
            h-full
            align-middle
            hover:opacity-75
            transition
            duration-150
            rounded-full
            border-2
            shadow-sm
            '
            ></Image>
        </div>
        {isActive && (
            <span className='absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3'/>
        )}
        </div>
    )
}   
export default Avatar;