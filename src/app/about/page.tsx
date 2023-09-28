'use client'

import { Button } from '@/components/ui/button'
import { Store } from '@/lib/ProviderContext'
import Link from 'next/link'

import React, { useContext } from 'react'

const page = () => {
    const { state } = useContext(Store);
    
    return (
        <div className='min-h-screen space-x-9 flex justify-center items-center'>
            <p>you scored {state.score} {state.score < 5 ? '😔' : '🥳'}</p>
            <Link href='/leaderboard'>
                <Button className='bg-green-600'>View leaderboard</Button>
            </Link>
        </div>
    )
}

export default page