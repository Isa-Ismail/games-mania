'use client'

import Table from '@/components/Table'
import { Store } from '@/lib/ProviderContext'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

interface Props {

}

const page: React.FC<Props> = () => {

    const { state, dispatch } = useContext(Store)

    console.log(state.leaderboard)

    useEffect(() => {
        fetch('https://ict-6.vercel.app/api/quiz')
            .then(response => response.json())
            .then(json => dispatch({ type: 'LEADERBOARD', payload: json }))
    }, [])

    return (
        <div className='min-h-screen flex justify-center items-center'>
            {state.leaderboard ? <Table data={state.leaderboard as []} /> : <Image alt="cool" src='/load.gif' width={100} height={100} />}
        </div>
    )
}

export default page