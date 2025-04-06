import React from 'react'
import { SubmitButtonProps } from './types'

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  label = isSubmitting ? 'Sending...' : 'Send message',
  className = '',
}) => {
  const ariaProps = {
    'aria-live': 'polite' as const,
    'aria-busy': isSubmitting,
  }

  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...ariaProps}
    >
      {isSubmitting ? (
        <>
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          {label}
        </>
      ) : (
        label
      )}
    </button>
  )
}

export default SubmitButton
