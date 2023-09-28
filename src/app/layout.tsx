import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { Roboto } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { StoreProvider } from '@/lib/ProviderContext'
import Provider from '@/lib/Provider'
import { ClerkProvider } from '@clerk/nextjs'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata = {
  title: 'Pixel Puzzles Quiz',
  description: 'Explore a wide range of gaming categories!! 🎮🕹️🎱|',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClerkProvider>
          <StoreProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </StoreProvider>
          </ClerkProvider>
        </body>
    </html>
  )
}
