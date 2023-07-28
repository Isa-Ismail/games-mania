'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Store } from "@/lib/ProviderContext"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import * as z from 'zod';

export function DialogDemo() {

  const router = useRouter()

  const { state, dispatch } = useContext(Store);

  const [openModal, setOpenModal] = useState(false)

  const handleOpenChange = (newOpenState:boolean) => {
    setOpenModal(newOpenState);
  };

  const [form, setForm] = useState({ username: '', email: '', password: '', city: '', country: '', phone: '' })
  
  const [formLogin, setFormLogin] = useState({ email: '', password: '' })

  const [isLoading, setIsLoading] = useState(false)

  const [toggle, setToggle] = useState(true)

  const RegisterURL = 'https://ict-6.vercel.app/api/auth/register'

  const LoginURL = 'https://ict-6.vercel.app/api/auth/login'
  

  const handleChange = (e: any) => {
    const { name, value } = e.target
    toggle?setForm({ ...form, [name]: value }):setFormLogin({ ...formLogin, [name]: value })
  }
  
  const handleSubmit = (e: any) => { 
    e.preventDefault()
    setIsLoading(true)
    axios.post(toggle ? RegisterURL : LoginURL, toggle ? form : formLogin).then((response) => {
      console.log(response.data);
      fetch(`https://ict-6.vercel.app/api/auth/${response.data.id}`).then((res) => res.json()).then((data) => {
        dispatch({ type: 'SET_USER', payload: data })
        localStorage.setItem('user', JSON.stringify(data))
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('authenticated', 'true')
      dispatch({ type: 'SET_TOKEN', payload: response.data.token })
      setIsLoading(false)
      setOpenModal(false)
      router.push('/mcq')
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false)
        // Handle any errors that occurred during registration, like displaying an error message to the user.
      });
  }

  return (
    <Dialog open={openModal} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
      {toggle?<DialogTitle>Sign Up</DialogTitle>:<DialogTitle>Sign in</DialogTitle>}
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {toggle&&<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Name
            </Label>
            <Input type="email" onChange={handleChange} id="username" name="username" value={form.username} className="col-span-3" />
          </div>}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input onChange={handleChange} id="email" name="email" value={toggle?form.email:formLogin.email} className="col-span-3" />
          </div>
          {toggle&&<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input onChange={handleChange} id="city" name="city" value={form.city} className="col-span-3" />
          </div>}
          {toggle&&<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input onChange={handleChange} id="phone" name="phone" value={form.phone} className="col-span-3" />
          </div>}
          {toggle&&<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input onChange={handleChange} id="country" name="country" value={form.country} className="col-span-3" />
        </div>}
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input onChange={handleChange} type="password" id="password" name="password" value={toggle?form.password:formLogin.password} className="col-span-3" />
          </div>
        </div>
        {isLoading && <Image className="mx-auto" src="/load.gif" width={100} height={100} alt="Picture of the author" />}
        <DialogFooter>
          {toggle ? <Button onClick={handleSubmit} type="submit">Sign up</Button> : <Button onClick={handleSubmit} type="submit">Sign in</Button>}
          {}
        </DialogFooter>
        {toggle?<p className="text-center">Already have an account <span onClick={()=>setToggle(e=>!e)} className="hover:cursor-pointer underline text-green-700 px-2">sign in</span></p>:<p className="text-center">Don't have an account? <span onClick={()=>setToggle(e=>!e)} className="hover:cursor-pointer underline text-green-700 px-2">sign up</span></p>}
      </DialogContent>
    </Dialog>
  )
}
