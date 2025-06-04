import React from 'react'
import ValueCard from './ValueCard'
import { icons } from './icons'
import { getRandomTagStyle } from '../ProjectSection/utils'

const points = [
  {
    title: 'Collaborate',
    description:
      'Design thrives in a collaborative environment. I believe that working closely with my team leads to better outcomes.',
  },
  {
    title: 'Learn Continuously',
    description:
      'As a developer, I recognize the importance of continuous learning in the ever-evolving tech landscape.',
  },
  {
    title: 'Keep Experimenting',
    description:
      'By actively listening to my teammates and considering their viewpoints, I can learn and grow.',
  },
  {
    title: 'Embrace Feedback',
    description:
      'I understand that feedback is a crucial part of growth. I approach critiques with an open mind.',
  },
]

const CollaborateSection: React.FC = () => {
  return (
    <div
      className='p-8 sm:p-10 bg-[#f9f9f9]
 rounded-xl shadow-sm border border-gray-200 max-w-5xl mx-auto mb-12 hover:shadow-md transition-shadow duration-300'
    >
      <div className='text-center mb-10'>
        <h2 className='text-2xl sm:text-3xl font-medium text-gray-800 mb-3'>
          Shared Values
        </h2>
        <div className='w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto' />
      </div>

      <p className='text-gray-600 max-w-3xl mx-auto mb-12 text-center text-base leading-relaxed'>
        I believe in making a positive impact on our world, whether it's through
        sustainability, education, or equality.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {points.map((point, index) => {
          const randomStyle = getRandomTagStyle()
          return (
            <div
              key={index}
              className='rounded-xl overflow-hidden'
              style={{
                backgroundColor: randomStyle.backgroundColor,
                color: randomStyle.color,
              }}
            >
              <ValueCard
                icon={React.cloneElement(icons[index] as React.ReactElement, {
                  style: { color: randomStyle.color },
                })}
                title={point.title}
                description={point.description}
                delay={(index + 1) * 300}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CollaborateSection
