import React from 'react'
import { Fade } from '@mui/material'
import CollaborateSection from './CollaborateSection'

const About: React.FC = () => {
  return (
    <div
      className='min-h-screen bg-gradient-to-br from-green-900/100 via-green-800 to-green-800/100
 flex flex-col items-center justify-start px-5 pt-24 sm:pt-32 pb-20'
    >
      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center mb-20'>
        <div className='mb-8 md:mb-0 md:mr-12'>
          <img
            src='/images/1676537092382.jpg'
            alt='Profile'
            className='w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover shadow-md border-2 border-white'
          />
        </div>

        <Fade in timeout={800}>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl sm:text-4xl font-normal text-white mt-8 md:mt-0 leading-tight'>
              I'm Abraham.
            </h1>
            <h2 className='text-xl sm:text-2xl text-[#ffff] mt-3 mb-5 leading-snug'>
              Frontend Developer based in Istanbul
            </h2>
            <div className='w-16 h-px bg-white mx-auto md:mx-0 mb-5' />
            <p className='text-white mt-2 max-w-2xl text-base leading-relaxed'>
              I'm a Frontend Developer passionate about turning ideas into
              responsive, user-friendly web apps.
            </p>
          </div>
        </Fade>
      </div>

      <div className='w-full max-w-6xl px-4 sm:px-8'>
        <CollaborateSection />
      </div>
    </div>
  )
}

export default About
