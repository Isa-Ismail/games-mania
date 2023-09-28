'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { DatePickerDemo } from '@/components/Datepicker'
import Image from 'next/image'
import { SelectDemo } from '@/components/Select'
import { useContext } from 'react'
import { Store } from '@/lib/ProviderContext'
import { CardWithForm } from '@/components/Card'
import { useQuery } from '@tanstack/react-query'
import TypewriterTitle from '@/components/Type'
import Link from 'next/link'

export default function Home() {

  return (
    <div className='min-h-screen grainy bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col space-y-20 justify-center'>

      <div className='md:flex items-center justify-between mx-auto md:mx-[10rem] space-y-10'>
        <div className='w-[20rem]  text-center flex-col justify-center mx-10 space-y-10'>
          <h1 className='text-4xl font-bold text-teal-900'>Welcome to Pixel Puzzles Quiz</h1>
          <h1 className='text-xl font-bold text-teal-900'><TypewriterTitle /></h1>
          <div>
            <Link href='/mcq'>
              <Button variant='outline' className='text-white bg-gradient-to-r from-rose-400 to-teal-400'>Get started</Button>
            </Link>
          </div>
        </div>
        <div>
          <Image  src={'/11.png'} alt='hero' width={300} height={300} />
        </div>
      </div>
      
    </div>
  )
}
