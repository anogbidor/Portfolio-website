import React from 'react'
import { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = ({
  id = 'privacy',
  name = 'privacy',
  required = true,
  checked = false,
  onChange,
  label,
  className = '',
  checkboxClassName = '',
  labelClassName = '',
  linkClassName = 'text-green-600 hover:text-green-500',
}) => (
  <div className={`flex items-center ${className}`}>
    <div className='flex items-center h-5'>
      <input
        id={id}
        name={name}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        required={required}
        className={`h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded ${checkboxClassName}`}
        aria-describedby={`${id}-description`}
      />
    </div>
    <div className={`ml-3 text-sm ${labelClassName}`}>
      <label htmlFor={id} className='font-medium text-gray-700'>
        {label || (
          <>
            I agree to the{' '}
            <a href='#' className={linkClassName}>
              privacy policy
            </a>
          </>
        )}
      </label>
    </div>
  </div>
)

export default Checkbox
