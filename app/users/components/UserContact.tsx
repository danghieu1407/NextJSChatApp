"use client"
import { User } from '@prisma/client';
import {useRouter} from "next/navigation";
import { useCallback, useState } from "react";
import axios from 'axios';
import Avatar from '@/app/components/Avatar';
import LoadingModal from '@/app/components/LoadingModal';

interface UserContactProps {
    data: User;
}

const UserContact:React.FC<UserContactProps> = ({
    data
}) => {
    const router = useRouter();
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const handleClick = useCallback(() => {
        setIsLoad(true);

        axios.post('/api/conversation', {
            userId : data.id
        }).then((data) => {
            router.push(`/conversation/${data.data.id}`);
        }).finally(() => {
            setIsLoad(false);
        })
    }, [data, router])
    return (
        <>  
        {isLoad && <LoadingModal/>}
            <div
            onClick={handleClick}
            className='
            w-full
            relative
            flex
            items-center
            space-x-3
            bg-white
            p-3
            hover:bg-neutral-100
            rounded-lg
            transition
            cursor-pointer
            '
        >
            <Avatar user={data}/>
            <div className='min-w-0 flex-1'>
                <div className='focus:ouline-none'>
                    <div className='flex justify-between items-center mb-1'>
                        <p className='text-sm font-medium text-gray-900'>
                            {data.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserContact;