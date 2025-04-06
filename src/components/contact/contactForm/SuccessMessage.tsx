import React from 'react'
import { SuccessMessageProps } from './types'

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title = 'Message sent successfully!',
  message = "We'll be in touch shortly.",
  className = '',
  iconClassName = '',
  textClassName = '',
  showIcon = true,
}) => (
  <div
    className={`p-4 bg-green-50 rounded-lg border border-green-200 flex items-start ${className}`}
    role='alert'
    aria-live='polite'
  >
    {showIcon && (
      <div className={`flex-shrink-0 ${iconClassName}`}>
        <svg
          className='h-5 w-5 text-green-500'
          fill='currentColor'
          viewBox='0 0 20 20'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    )}
    <div className={`ml-3 ${textClassName}`}>
      <h3 className='text-sm font-medium text-green-800'>{title}</h3>
      <p className='mt-1 text-sm text-green-700'>{message}</p>
    </div>
  </div>
)

export default SuccessMessage
