'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
      <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => { 
            typewriter
              .typeString("Explore a wide range of gaming categories!! 🎮🕹️🎱")
              .pauseFor(500)
              .deleteAll()
              .typeString("Compete with Friends 📝")
              .start()
          }}
      />
  )
}

export default TypewriterTitle