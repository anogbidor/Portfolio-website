import React from 'react'
import { Fade } from '@mui/material' // Keeping Fade for animations
import Diversity3Icon from '@mui/icons-material/Diversity3'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FeedbackIcon from '@mui/icons-material/Feedback'

const icons = [
  <Diversity3Icon className='text-green-100' />,
  <PsychologyAltIcon className='text-green-100' />,
  <LightbulbIcon className='text-green-100' />,
  <FeedbackIcon className='text-green-100' />,
]

const points = [
  {
    title: 'Collaborate',
    description:
      'Design thrives in a collaborative environment. I believe that working closely with my team leads to better outcomes. By fostering open communication and encouraging feedback, I aim to contribute to a space where ideas can be shared and designs can evolve through teamwork.',
  },
  {
    title: 'Learn Continuously',
    description:
      'As a developer, I recognize the importance of continuous learning in the ever-evolving tech landscape. I actively seek out opportunities to expand my knowledge, whether through online courses, reading documentation, or participating in coding communities.',
  },
  {
    title: 'Keep Experimenting',
    description:
      'By actively listening to my teammates and considering their viewpoints, I can learn and grow, leading to designs that better meet user needs. This experimental mindset not only helps me improve my work but also encourages collaboration and creativity within the team.',
  },
  {
    title: 'Embrace Feedback',
    description:
      'I understand that feedback is a crucial part of growth. I approach critiques with an open mind and view them as opportunities to improve my work. By welcoming constructive criticism, I aim to enhance my coding practices and design decisions.',
  },
]

const CollaborateSection = () => {
  return (
    <div className='p-6 sm:p-8 bg-green-800/80 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 max-w-5xl mx-auto mb-12 text-center'>
      <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4 text-shadow'>
        Let's Connect on Shared Values
      </h2>

      <div className='w-16 h-1 bg-white rounded mx-auto mb-10 shadow-sm' />

      <p className='text-white/90 max-w-3xl mx-auto mb-12 text-base sm:text-lg leading-relaxed'>
        I believe in making a positive impact on our world, whether it's through
        sustainability, education, equality, or carbon neutrality. My goal is to
        contribute to these ideals and help create a better future for the next
        generation.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {points.map((point, index) => (
          <div key={index} className='group'>
            <div className='h-full p-6 text-left rounded-xl bg-white/95 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-green-900 text-green-100 flex items-center justify-center rounded-full mr-4 shadow-md'>
                  {icons[index]}
                </div>
                <h3 className='text-lg font-bold text-green-900'>
                  {point.title}
                </h3>
              </div>
              <p className='text-gray-700 leading-relaxed text-sm'>
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex flex-col items-center justify-start px-5 pt-24 sm:pt-36 pb-20'>
      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center'>
        <div className='mb-8 md:mb-0 md:mr-12'>
          <img
            src='/images/1676537092382.jpg'
            alt='Profile'
            className='w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-xl border-4 border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl'
          />
        </div>

        <Fade in timeout={1200}>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-8 md:mt-0 leading-tight drop-shadow-md'>
              I'm Abraham.
            </h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl text-white/90 mt-4 leading-snug'>
              Frontend Developer based in Istanbul, Türkiye
            </h2>
            <p className='text-white/85 mt-6 max-w-2xl text-base sm:text-lg leading-relaxed'>
              I'm a Frontend Developer passionate about turning ideas into
              responsive, user-friendly web apps. I've built features for both
              mobile and desktop using modern technologies like React,
              TypeScript, and Tailwind CSS. Experienced with Git, Agile
              workflows, and design tools, I'm always learning and love
              contributing to open source.
            </p>
          </div>
        </Fade>
      </div>

      <div className='w-full max-w-6xl mt-20 sm:mt-32 px-4 sm:px-8'>
        <CollaborateSection />
      </div>
    </div>
  )
}

export default About
