// components/Card.tsx
import React from 'react'

interface CardProps {
  image: string
  backgroundColor: string
  githubUrl: string
  mediumUrl: string
  description?: string
}

const Card: React.FC<CardProps> = ({
  image,
  backgroundColor,
  githubUrl,
  mediumUrl,
  description,
}) => {
  return (
    <div
      className='flex flex-col items-center rounded-lg p-4 shadow-md w-72'
      style={{ backgroundColor }}
    >
      {/* Card Image */}
      <img
        src={image}
        alt='Project preview'
        className='w-full h-50 object-cover rounded-md mb-2'
        onError={(e) => {
          e.currentTarget.src = '/images/default-image.png' // Fallback image
        }}
      />

      {/* Card Text - Add your description here */}
      {description && (
        <p className='text-center text-custom-green my-2 px-2'>{description}</p>
      )}

      {/* Medium Link Text */}
      <p className='text-center text-custom-link no-underline mb-2 hover:text-purple-800'>
        <a href={mediumUrl} target='_blank' rel='noopener noreferrer'>
          Continue reading on Medium
        </a>
      </p>

      {/* GitHub Button */}
      <button
        onClick={() => window.open(githubUrl, '_blank')}
        className='mt-2 py-2 px-4 bg-custom-link text-white rounded-md hover:bg-custom-light-soft-green hover:text-purple-800  transition duration-300'
      >
        View on GitHub
      </button>
    </div>
  )
}

export default Card
