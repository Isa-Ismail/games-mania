'use client'

import React, { useContext, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { DialogDemo } from './Dialog'
import { Store } from '@/lib/ProviderContext'

interface Props {}

const Navbar = () => {

    const { state: { authenticated }, dispatch } = useContext(Store);

    const [show, setShow] = useState(false)

    return (
        <nav className={`${show ? 'h-[22rem]' : 'h-22'} md:h-20 flex-col fixed z-10 w-full bg-cyan-400 shadow-md`}>
            <div className={`sticky top-0 flex justify-between items-center px-6`}>
                <div className='flex items-center p-3'>
                    <Link href='/'><Image className='rounded-full' src={'/mario.png'} width={50} height={30} alt="Picture of the author" /></Link>
                </div>
                <div className='hidden md:flex items-center space-x-10 pt-2'>
                    <Link href='/' >Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/mcq'>Quiz</Link>
                    <Link href='/leaderboard'>Leaderboard</Link>
                    {authenticated?<Button onClick={()=> dispatch({type:"LOGOUT"})}>LogOut</Button>:<DialogDemo />}
                </div>
                <div className='md:hidden hover:cursor-pointer'>
                    {!show ? (<Image
                        onClick={() => setShow(!show)}
                        src="/ham.png"
                        width={100}
                        height={100}
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
                <div className='space-y-6 flex flex-col'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/mcq'>Quiz</Link>
                    <Link href='/leaderboard'>Leaderboard</Link>
                    <DialogDemo />
                </div>
            </div>}
        </nav>
    )
}

export default Navbar