'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { DatePickerDemo } from '@/components/Datepicker'
import Image from 'next/image'
import { SelectDemo } from '@/components/Select'

export default function Home() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date()
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  
  const { toast } = useToast()
  const [selected, setSelected] = useState()
  const [date, setDate] = useState('')
  const [dateFromChild, setDateFromChild] = useState('');

  const handleDate = (date: any) => {
    setSelected(date)
  }
  
  console.log(selected)

  return (
    <div className='min-h-screen flex flex-col space-y-20 justify-center'>

      <div className='md:flex items-center justify-evenly space-y-10'>
        <div className='w-[20rem]  text-center flex-col justify-center mx-10 space-y-10'>
          <h1 className='text-5xl text-red-400'>Nintendo 🚩</h1>
          <p className='text-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima reprehenderit autem maxime nam temporibus est itaque iure, iusto voluptatum distinctio adipisci? Libero quas quos itaque perferendis, nisi tempore officia nostrum.</p>
        </div>
        <div>
          <Image  src={'/hero.png'} alt='hero' width={500} height={500} />
        </div>
      </div>

      <div className='flex md:space-x-10 justify-center'>

      <Button
      className='bg-red-400'
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
      >
        Show Toast
        </Button>

        <SelectDemo name = 'Fruits' />

        <DatePickerDemo onDate={handleDate} />
      
      </div>
    </div>
  )
}
