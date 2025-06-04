import React from 'react'

import { getRandomTagStyle } from '../ProjectSection/utils'

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const randomStyle = getRandomTagStyle()

  return (
    
      <div
        className='
          h-full p-6 text-left rounded-lg 
          bg-white border border-gray-200 
          transition-all duration-300 
          hover:shadow-lg hover:border-gray-300
          hover:-translate-y-1
          group
          relative overflow-hidden
        '
        aria-labelledby={`card-title-${title
          .replace(/\s+/g, '-')
          .toLowerCase()}`}
      >
        {/* Subtle background effect on hover */}
        <div
          className='
          absolute inset-0 bg-gradient-to-br from-gray-50 to-white
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        '
        />

        <div className='flex items-center mb-4 relative z-10'>
          <div
            className='
            w-12 h-12 flex items-center justify-center rounded-full mr-4 
            shadow-sm group-hover:shadow-md
            transition-all duration-300
          '
            style={{
              backgroundColor: randomStyle.backgroundColor,
            }}
          >
            <span className='text-white'>
              {React.cloneElement(icon as React.ReactElement, {
                style: { color: '#FFFFFF' },
              })}
            </span>
          </div>
          <h3
            id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className='text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300'
          >
            {title}
          </h3>
        </div>
        <p className='text-gray-600 leading-relaxed text-sm relative z-10 group-hover:text-gray-700 transition-colors duration-300'>
          {description}
        </p>

        {/* Decorative element */}
        <div
          className='
          absolute bottom-0 left-0 right-0 h-1 bg-gray-200 
          group-hover:bg-gray-300 transition-colors duration-500
          transform origin-left scale-x-0 group-hover:scale-x-100
        '
        />
      </div>

  )
}

export default ValueCard
