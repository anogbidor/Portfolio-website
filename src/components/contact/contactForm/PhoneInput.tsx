import React from 'react'
import { PhoneInputProps } from './types'

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  country = 'US',
  onCountryChange,
  className = '',
  inputClassName = '',
  selectClassName = '',
}) => {
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onCountryChange) {
      onCountryChange(e.target.value)
    }
  }

  return (
    <div className={className}>
      <label
        htmlFor='phoneNumber'
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        Phone number
      </label>
      <div className='relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 flex items-center'>
          <select
            value={country}
            onChange={handleCountryChange}
            id='country'
            name='country'
            className={`h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-lg ${selectClassName}`}
            aria-label='Country code'
          >
            <option value='US'>US (+1)</option>
            <option value='CA'>CA (+1)</option>
            <option value='EU'>EU (+3)</option>
            <option value='UK'>UK (+44)</option>
            <option value='AU'>AU (+61)</option>
          </select>
        </div>
        <input
          type='tel'
          name='phoneNumber'
          id='phoneNumber'
          value={value}
          onChange={onChange}
          className={`block w-full px-4 py-2 pl-20 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${inputClassName}`}
          aria-describedby='phoneNumber-description'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          
        />
      </div>
      <p id='phoneNumber-description' className='mt-1 text-xs text-gray-500'>
        Format: 123-456-7890
      </p>
    </div>
  )
}

export default PhoneInput
