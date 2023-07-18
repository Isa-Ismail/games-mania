'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { DialogDemo } from './Dialog'

interface Props {}

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <nav className={`${show ? 'h-[18rem]' : 'h-20'} md:h-20 flex-col fixed z-10 w-full bg-red-400 shadow-md`}>
            <div className={`sticky top-0 flex justify-between items-center px-20`}>
                <div className='flex items-center'>
                    <Link href='/'><Image className='rounded-full' src={'/mario.png'} width={50} height={30} alt="Picture of the author" /></Link>
                </div>
                <ul className='hidden md:flex items-center space-x-10 pt-6'>
                    <Link href='/' >Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/mcq'>Quiz</Link>
                    <Link href='/leaderboard'>Leaderboard</Link>
                    <DialogDemo />
                </ul>
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
                        src="/ham.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />)
                    }
                </div>
            </div>
            {show&&<div className='md:hidden flex items-center justify-center'>
                <ul>
                    <li className='p-2 hover:cursor-pointer'>Home</li>
                    <li className='p-2 hover:cursor-pointer'>About</li>
                    <li className='p-2 hover:cursor-pointer'>Browse</li>
                    <DialogDemo />
                </ul>
            </div>}
        </nav>
    )
}

export default Navbar