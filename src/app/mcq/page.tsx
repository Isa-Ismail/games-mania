'use client'

import { Store } from '@/lib/ProviderContext';
import React, { useContext } from 'react'
import quizData from '../../lib/quiz.json'
import { Button } from '@/components/ui/button';
import { DialogDemo } from '@/components/Dialog';
import { useRouter } from 'next/navigation';


interface Props {}

const page = () => {

    type Topic = 'game' | 'movie' | 'song' | 'Cars'

    const {state, dispatch} = useContext(Store);

    const [index, setIndex] = React.useState(0)

    const router = useRouter()

    const [optIndex, setOptIndex] = React.useState(4)

    const [answer, setAnswer] = React.useState('')

    const [score, setScore] = React.useState(0)

    const quiz = state.topic==='game' && quizData[index]

    console.log(score)

    if (!state.authenticated) {
        return (
            <div className='min-h-screen space-y-10 flex flex-col justify-center items-center'>
                <p>Please login to participate in the quiz and stay on the leaderboard</p>
                <DialogDemo />
            </div>
        )
   }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            {quiz?<div className='bg-cyan-400 p-10 shadow-md rounded-lg w-[40rem]'>
                <h1 className='text-4xl text-center'>Question no: {index+1}</h1>
                <br />
                <h1 className='text-center text-xl '>{quiz.question}</h1>
                {quiz.options.map((option, id) => (
                    <div className='flex flex-col items-center py-4' key={id}>
                        <button onClick={() => { setOptIndex(id); setAnswer(option) }} className={optIndex===id?'w-40 rounded-lg p-2 bg-black text-white':'rounded-lg w-40 p-2 bg-white'}>
                            {option}
                        </button>
                    </div>
                ))}
                <div className='flex justify-end'>
                    {index<quizData.length-1?<Button disabled={optIndex===4} onClick={() => { setIndex(id => id + 1); quiz.correctAnswer === answer && setScore(score => score + 1);  setOptIndex(4)}}>
                        Next 
                    </Button> : <Button onClick={() => { quiz.correctAnswer === answer && setScore(score => score + 1); setIndex(id => id + 1) }}>
                        Submit 
                    </Button>}
                </div>
            </div>: <Button onClick={()=>{dispatch({type:"SCORE", payload: score}); router.push('/about')}}>
                        View score 
                    </Button>}
        </div>
    )
}

export default page