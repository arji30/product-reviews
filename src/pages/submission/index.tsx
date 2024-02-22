import React from 'react'
import Navbar from '@/components/NavBar'
import { useAuthentication } from '@/lib/hooks/use-authentication'
import Link from 'next/link';

function Submission() {
    const {user} = useAuthentication();
  return (
    <>
    <Navbar username = {user?.givenName}/>
    <div>
        <h1> Submission successful ! </h1>
        <Link href="./"> Back to Homepage </Link>
    </div>
    </>
  )
}

export default Submission;