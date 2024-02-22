import React from 'react'
import Navbar from '@/components/NavBar'
import { useAuthentication } from '@/lib/hooks/use-authentication'
import Link from 'next/link';

function Submission() {
    const {user} = useAuthentication();
    return (
        <>
        <Navbar username = {user?.givenName}/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500/90">
            <div className="container flex flex-1 flex-col items-center justify-center px- md:px-6 space-y-4 text-center">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Submission Successful!</h1>
                    <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Thank you for your review. Your feedback is valuable to us.
                    </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                    <Link href="./">
                        <button className="my-16 w-80 py-3 text-lg font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700">
                            Back to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Submission;