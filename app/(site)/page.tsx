import Image from 'next/image'
import Authform from './components/Authform'
export default function Home() {
    return (
        
        <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 mt-120'>
            <div className="h-screen absolute z-[-40]">
                <Image
                    src="/images/banner_thinking.png"
                    alt='banner_thinking'
                    height={10000}
                    width={10000}

                    quality={100}
                />
            </div>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <Image
                    className='mx-auto'
                    height={80}
                    width={80}
                    src='/images/iconapp.gif'
                    alt='iconapp'
                />
                <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-800'>
                    Sign In with your account
                </h2>
                <Authform />
            </div>
        </div>
    )
}
