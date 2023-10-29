"use client"
import useConversation from "@/app/hooks/useConversation"
import axios from "axios";
import { use } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { BsSend } from 'react-icons/bs'
import { CldUploadButton } from "next-cloudinary";


const InputForm = () => {
    const { conversationId } = useConversation();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            message: '',
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', { shouldValidate: true });
        axios.post(`/api/messages`, {
            ...data,
            conversationId: conversationId,
        })
    }
    const handleUpload = (result: any) => {
        axios.post(`/api/messages`, {
            image: result?.info?.secure_url,
            conversationId
        })
    }
    return (
        <div className="
            py-4
            px-4
            bg-white
            border-t
            flex
            items-center
            gap-2
            lg:gap-4
            w-full
            ">
            <CldUploadButton
                options={{ maxFiles: 1 }}
                onUpload={handleUpload}
                uploadPreset="ofxi23e2"
            >
                <HiPhoto size={30} className="text-pink-400 hover:text-pink-500" />
            </CldUploadButton>
            <form
                onClick={handleSubmit(onSubmit)}
                className="flex items-center gap-2 w-full lg:gap-4"
            >
                <MessageInput
                    id='message'
                    register={register}
                    errors={errors}
                    placeholder="Type your message"
                    required
                />
                <button type="submit"
                    className="p-2 bg-pink-400 cursor-pointer rounded-full transition hover:bg-pink-500">
                    <BsSend className="text-white"
                        size={20} />
                </button>
            </form>
        </div>
    )
}

export default InputForm