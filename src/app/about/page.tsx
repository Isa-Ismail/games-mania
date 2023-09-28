'use client'

import { Store } from '@/lib/ProviderContext'
import Link from 'next/link'

import React, { useContext } from 'react'

const page = () => {
    const { state } = useContext(Store);
    
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <p>you scored {state.score} {state.score<5?'😔':'🥳' }</p>
        </div>
    )
}

export default page