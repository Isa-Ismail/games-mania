'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

interface Props {}

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <nav className={`${show ? 'h-[18rem]' : 'h-20'} md:h-20 flex-col fixed z-10 w-full bg-orange-100 shadow-md`}>
            <div className={`sticky top-0 flex justify-between items-center px-12`}>
                <div className='p-4'>
                    <h1 className='hover:cursor-pointer text-3xl font-bold'>Logo</h1>
                </div>
                <ul className='hidden md:flex space-x-10 pt-6'>
                    <li className='hover:cursor-pointer'><Link href='/' >Home</Link></li>
                    <li className='hover:cursor-pointer'><Link href='/about'>About</Link></li>
                    <li className='hover:cursor-pointer'><Link href='/browse games'>Browse</Link></li>
                    <li className='hover:cursor-pointer'><Link href='/signup'><Button>Sign up</Button></Link></li>
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
                    <li className='p-2 hover:cursor-pointer'>Sign up</li>
                </ul>
            </div>}
        </nav>
    )
}

export default Navbar