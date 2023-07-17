'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { DatePickerDemo } from '@/components/Datepicker'


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
    <main className="min-h-screen flex items-center justify-center">
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
      <DatePickerDemo onDate={handleDate} />
      <input type="date" onChange={e => setDateFromChild(e.target.value)} />
      {dateFromChild}
    </main>
  )
}
