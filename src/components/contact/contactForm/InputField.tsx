import React from 'react'
import { InputFieldProps } from './types'

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  name,
  type = 'text',
  required = false,
  error,
  onChange,
  className = '',
}) => {
  const ariaProps = {
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? `${id}-error` : undefined,
  } as const

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={`block w-full px-4 py-2 rounded-lg border ${
          error
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
        } shadow-sm sm:text-sm`}
        {...ariaProps}
      />
      {error && (
        <p id={`${id}-error`} className='mt-1 text-sm text-red-600'>
          {error}
        </p>
      )}
    </div>
  )
}
export default InputField