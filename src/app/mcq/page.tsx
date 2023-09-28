'use client'

import { Store } from '@/lib/ProviderContext';
import React, { useContext } from 'react'
import quizData from '../../lib/quiz.json'
import { Button } from '@/components/ui/button';
import { DialogDemo } from '@/components/Dialog';
import { useRouter } from 'next/navigation';
import { useAuth } from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';
import { toast } from '@/components/ui/use-toast';

interface Props {}

const page = () => {

    const { userId } = useAuth();
    const { user } : any = useUser();

    console.log(user)

    type Topic = 'game' | 'movie' | 'song' | 'Cars'

    const {state, dispatch} = useContext(Store);

    const [index, setIndex] = React.useState(0)

    const router = useRouter()

    const [optIndex, setOptIndex] = React.useState(4)

    const [answer, setAnswer] = React.useState('')

    const [score, setScore] = React.useState(0)

    const quiz = state.topic === 'game' && quizData[index]

    return (
        <div className='min-h-screen flex justify-center items-center'>
            {quiz?<div className='bg-gradient-to-r from-rose-100 to-teal-100 p-10 shadow-md rounded-lg w-[40rem]'>
                <h1 className='text-4xl text-center'>Question no: {index+1}</h1>
                <br />
                <h1 className='text-center text-xl '>{quiz.question}</h1>
                {quiz.options.map((option, id) => (
                    <div className='flex justify-center py-4' key={id}>
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
            </div> : <Button onClick={() => {
                fetch('https://ict-6.vercel.app/api/quiz', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ score, topic: state.topic, userId, username: user.fullName })
                });   
                dispatch({ type: "SCORE", payload: score });
                    router.push('/leaderboard')
                    toast.success('Quiz completed successfully')
                }}>
                    Publish result and view score 
                </Button>}
        </div>
    )
}

export default page