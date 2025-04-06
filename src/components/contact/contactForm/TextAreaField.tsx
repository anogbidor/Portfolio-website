import React from 'react'
import { TextAreaFieldProps } from './types'

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  name,
  value,
  rows = 4,
  required = false,
  error,
  onChange,
  className = '',
  textareaClassName = '',
  errorClassName = '',
  placeholder = '',
  disabled = false,
  ariaDescribedBy,
}) => {
  const ariaProps = {
    'aria-invalid': error ? ('true' as const) : ('false' as const),
    'aria-describedby': error ? `${id}-error` : ariaDescribedBy,
    'aria-required': required ? true : undefined,
  }

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        className={`block w-full px-4 py-2 rounded-lg border ${
          error
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
        } shadow-sm sm:text-sm ${textareaClassName}`}
        {...ariaProps}
      />
      {error && (
        <p
          id={`${id}-error`}
          className={`mt-1 text-sm text-red-600 ${errorClassName}`}
          role='alert'
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default TextAreaField
