import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { Roboto } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
          {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}