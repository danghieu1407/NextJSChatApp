"use client"
import { Context } from "vm";
import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button/Button";
import { use, useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import {BsGithub} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import axios from "axios";
import toast from "react-hot-toast";
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { Sign } from "crypto";

type Variant = 'login' | 'register';
const Authform = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('login');
    const [isloading, setIsloading] = useState<boolean>(false);

    useEffect(() => {
        if(session?.status === 'authenticated') {
            router.push('/users');
        } 
    }, [session?.status, router]);

    const toggleVariant = useCallback(() => {
        if (variant === 'login') {
            setVariant('register');
        } else {
            setVariant('login');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsloading(true);
        if (variant === 'login') {
            signIn('credentials', {
                ...data,
                redirect: false,
            }).then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials');
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully');
                    router.push('/users');
                }
                }).finally(() => setIsloading(false));
        }
        if (variant === 'register') {
            axios.post('/api/register', data)
            .then(() => signIn('credentials', data))
            .catch((error) => {
                toast.error("Something went wrong");
            }).finally(() => setIsloading(false));
        }
    };

    const socialLogin = (action: string) => {
        setIsloading(true);
        signIn(action, { redirect: false }).then((callback) => {
            if (callback?.error) {
                toast.error('Invalid credentials');
            }
            if (callback?.ok && !callback?.error) {
                toast.success('Logged in successfully');
            }
        }).finally(() => setIsloading(false));
    }
    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'register' && (
                        <Input id="name" label="Name" register={register} errors={errors} disabled={isloading} />
                    )}
                    <Input id="email" type="email" label="Email" register={register} errors={errors} required  disabled={isloading}/>
                    <Input id="password" type="password" label="Password" register={register} errors={errors} required disabled={isloading}/>
                    <div>
                        <Button disabled={isloading} fullWidth type="submit">
                            {variant === 'login' ? 'Login' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div
                                className="
                                w-full
                                border-t
                                border-gray-300"/>
                        </div>

                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <SocialLogin
                            icon={BsGithub}
                            onClick={() => socialLogin('github')}
                        />
                        <SocialLogin
                            icon={FcGoogle}
                            onClick={() => socialLogin('google')}
                        />
                        <SocialLogin
                            icon={BsFacebook}
                            onClick={() => socialLogin('facebook')}
                        />
                    </div>
                </div>
                <div className="
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-6
                        px-2
                        text-gray-500
                    ">
                        <div>
                            {variant === 'login' ? "Don't have an account?" : 'Already have an account?'}
                        </div>
                        <div onClick={toggleVariant} className="underline cursor-pointer"> 
                            {variant === 'login' ? 'Create an account' : 'Login'}
                        </div>
                </div>
            </div>
        </div>

    );

}
export default Authform;