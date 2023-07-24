'use client'

import Table from '@/components/Table'
import { Store } from '@/lib/ProviderContext'
import React, { useContext, useEffect } from 'react'

interface Props {

}

const page: React.FC<Props> = () => {

    const { state, dispatch } = useContext(Store)
    console.log(state)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => dispatch({ type: 'LEADERBOARD', payload: json }))
    }, [])

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Table data={[]} />
        </div>
    )
}

export default page