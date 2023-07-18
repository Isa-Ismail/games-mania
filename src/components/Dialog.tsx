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
import { useState } from "react"

export function DialogDemo() {

    const [form, setForm] = useState({ name: '', email: '', password: '' })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    console.log(form)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input onChange={handleChange} id="name" name="name" value={form.name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input onChange={handleChange} id="email" name="email" value={form.email} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input onChange={handleChange} id="email" name="password" value={form.password} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Sign up</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
