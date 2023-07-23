'use client'

import { Store } from '@/lib/ProviderContext';
import React, { useContext } from 'react'

interface Props {}

const page = () => {

    const {state, dispatch} = useContext(Store);
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <p>welcome <span className='text-cyan-400'>{ state.user?.username }</span></p>
            </div>
        </div>
    )
}

export default page