"use client"
import { User } from '@prisma/client';
import axios from 'axios';
import { set } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Modal from '../Modal';
import Input from '../Inputs/Input';
import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';
import Button from '../Button/Button';


interface SettingsModalProps {
    isOpen?: boolean;
    currentUser: User;
    onClose: () => void;
}
const SettingsModal: React.FC<SettingsModalProps> = (
    {
        isOpen,
        currentUser,
        onClose
    }
) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, setValue, watch, formState: {
        errors
    } } = useForm<FieldValues>({
        defaultValues: {
            name: currentUser.name,
            image: currentUser.image,
        }
    });

    const image =  watch('image');
    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true,
        });
    }

    const onSubmit: SubmitHandler<FieldValues> =  (data) => {
        setLoading(true);
        axios.post('/api/settings', data).then(()=>{
            router.refresh();
            onClose();
        }).catch(()=>{
            toast.error('Something went wrong');
        }).finally(()=>{
            setLoading(false);
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="space-y-12">
                    <div  className="border-b border-gray-900/10 pb-10">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 ">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Edit your information</p>
                        <div className="mt-10 flex flex-col gap-y-8">
                            <Input  label="Your profile name" id="name" disabled={loading} errors={errors} register={register} required/>
                            <div>
                                <label className='block text-sm font-medium leading-6  text-gray-600'>Your profile photo</label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <Image width={48} height={48} className="rounded-full w-[48px] h-[48px]" src={image || currentUser?.image || '/images/DefaultAvatar.png'} alt='Avatar'></Image>
                                    <CldUploadButton options={{maxFiles: 1}} onUpload={handleUpload} uploadPreset="ofxi23e2">
                                        <Button disabled={loading} secondary type="button">Change</Button>
                                    </CldUploadButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-4">
                        <Button disabled={loading} secondary onClick={onClose}>Cancel</Button>
                        <Button disabled={loading}  type="submit">Save</Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default SettingsModal;