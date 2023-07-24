'use client'

import { Store } from '@/lib/ProviderContext';
import React, { useContext } from 'react'
import quizData from '../../lib/quiz.json'
import { Button } from '@/components/ui/button';


interface Props {}

const page = () => {

    const {state, dispatch} = useContext(Store);

    const [index, setIndex] = React.useState(0)

    const [optIndex, setOptIndex] = React.useState(4)

    const [answer, setAnswer] = React.useState('')

    const [score, setScore] = React.useState(0)

    const quiz = quizData[index]

    console.log(quiz)

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-cyan-400 p-10 shadow-md rounded-lg w-[40rem]'>
                <h1 className='text-4xl text-center'>Question no: {index+1}</h1>
                <br />
                <h1 className='text-center text-xl '>{quiz.question}</h1>
                {quiz.options.map((option, id) => (
                    <div className='flex flex-col items-center py-4' key={id}>
                        <button onClick={() => { setOptIndex(id); setAnswer(option) }} className={optIndex===id?'w-40 rounded-lg p-2 bg-black text-white':'rounded-lg w-40 p-2 bg-gray-300'}>
                            {option}
                        </button>
                    </div>
                ))}
                <div className='flex justify-between'>
                    <Button onClick={()=> setIndex(id=>id-1)} disabled = {index === 0}>
                        Previous 
                    </Button>
                    <Button disabled={optIndex===4} onClick={() => { setIndex(id => id + 1); quiz.correctAnswer === answer && setScore(score => score + 1);  setOptIndex(4)}}>
                        Next 
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page