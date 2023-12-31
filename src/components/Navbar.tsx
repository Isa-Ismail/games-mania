'use client'

import React, { useContext, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { DialogDemo } from './Dialog'
import { Store } from '@/lib/ProviderContext'
import { useUser } from '@clerk/nextjs'
import { useAuth } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";

interface Props {}

const Navbar = () => {

    const { state: { authenticated }, dispatch } = useContext(Store);

    const [show, setShow] = useState(false)

    const { isSignedIn } = useUser();

    const handleShow = (e: any) => {
        setShow(e)
    }

    return (
        <nav className={`h-22 md:h-20 sticky top-0 w-full bg-gradient-to-r from-rose-100 to-teal-100 shadow-md`}>
            <div className={`flex justify-between items-center px-6`}>
                <div className='flex items-center p-3'>
                    <Link href='/'><Image className='rounded-full' src={'/mario.png'} width={50} height={30} alt="Picture of the author" /></Link>
                </div>
                <div className='hidden md:flex items-center space-x-10 pt-2'>
                    <Link href='/mcq'>Quiz</Link>
                    <Link href='/leaderboard'>Leaderboard</Link>
                    {isSignedIn ? <UserButton />:<Link href='/sign-up'><Button className='bg-gradient-to-r border-dashed border-cyan-700 text-black text-2xl from-rose-100 to-teal-100'>Sign up</Button></Link>}
                </div>
                <div className='md:hidden hover:cursor-pointer'>
                    {!show ? (<Image
                        onClick={() => setShow(!show)}
                        src="/open.png"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />) :
                        (<Image
                        onClick={() => setShow(!show)}
                        src="/close.png"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />)
                    }
                </div>
            </div>
            {show&&<div className='md:hidden flex items-center justify-center'>
                <div className='space-y-6 flex flex-col py-4'>
                    <Link className='hover:scale-105' onClick={()=>setShow(!show)} href='/mcq'>Quiz</Link>
                    <Link className='hover:scale-105' onClick={()=>setShow(!show)} href='/leaderboard'>Leaderboard</Link>
                    {isSignedIn ? <UserButton />:<Link href='/sign-up'><Button className='bg-gradient-to-r border-dashed border-cyan-700 text-black text-2xl from-rose-100 to-teal-100'>Sign up</Button></Link>}
                </div>
            </div>}
        </nav>
    )
}

export default Navbar