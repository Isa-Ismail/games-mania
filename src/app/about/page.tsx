'use client'

import { Store } from '@/lib/ProviderContext'
import Link from 'next/link'

import React, { useContext } from 'react'

interface Props {}

const page = () => {
    const {state} = useContext(Store)
    return (
        <div className='min-h-screen flex justify-center items-center'>
            {state.authenticated ? <p>you scored {state.score} {state.score<5?'😔':'🥳' }</p>: <Link href='/mcq'>Give a quiz</Link>}
        </div>
    )
}

export default page