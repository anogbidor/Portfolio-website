'use client'
import { useState } from 'react'
import ContactHeader from './ContactHeader'
import SuccessMessage from './SuccessMessage'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
// import PhoneInput from './PhoneInput'
import Checkbox from './Checkbox'
import SubmitButton from './SubmitButton'
import { FormData, FormErrors } from './types'

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    country: 'US',
   
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
     const { name, value, type } = e.target as HTMLInputElement
     const checked =
       type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

     setFormData((prev) => ({
       ...prev,
       [name]: type === 'checkbox' ? checked : value,
     }))

     if (errors[name]) {
       setErrors((prev) => ({ ...prev, [name]: '' }))
     }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: '',
        country: 'US',
        privacy: false,
      })
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1500)
  }

  return (
    // Changed min-h-[100vh] to min-h-[90vh] to move the form up
    // You can adjust this value further (e.g., min-h-[80vh], min-h-[70vh]) to move it higher
    // Also removed the background gradient as per your previous request
    <div className='min-h-[70vh] flex items-start justify-center pt-20 p-4 sm:p-6'>
      {/* You can adjust the pt-20 value (padding-top) to move the form higher or lower */}
      {/* max-w-2xl controls the form width - adjust if needed */}
      <div className='w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-200'>
        <div className='p-8'>
          {/* Uncomment this section if you want to restore the header */}
          {/*
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              Contact Us
            </h2>
            <p className='text-gray-600'>
              Fill out the form below and we'll get back to you soon
            </p>
          </div>
          */}

          {submitSuccess ? (
            <SuccessMessage
              title='Message sent successfully!'
              message="We'll be in touch shortly."
            />
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <InputField
                  id='firstName'
                  label='First name'
                  name='firstName'
                  value={formData.firstName}
                  required
                  onChange={handleChange}
                  error={errors.firstName}
                  className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                />
                <InputField
                  id='lastName'
                  label='Last name'
                  name='lastName'
                  value={formData.lastName}
                  required
                  onChange={handleChange}
                  error={errors.lastName}
                  className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                />
              </div>

              <div className='grid grid-cols-1 gap-6'>
                <InputField
                  id='email'
                  label='Email'
                  name='email'
                  type='email'
                  value={formData.email}
                  required
                  onChange={handleChange}
                  error={errors.email}
                  className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                />
                <InputField
                  id='company'
                  label='Company (optional)'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                />
                {/* Uncomment this section if you want to restore the phone input */}
                {/*
                <PhoneInput
                  id='phoneNumber'
                  label='Phone number (optional)'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  country={formData.country}
                  onChange={(value, country) => {
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber: value,
                      country: country || 'US',
                    }))
                  }}
                  className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                />
                */}
                <TextAreaField
                  id='message'
                  name='message'
                  label='Message'
                  value={formData.message}
                  required
                  onChange={handleChange}
                  error={errors.message}
                  rows={5}
                  className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                />
              </div>

              <Checkbox
                id='privacy'
                name='privacy'
                checked={formData.privacy || false}
                onChange={handleChange}
                label={
                  <>
                    I agree to the{' '}
                    <a href='#' className='text-green-600 hover:text-green-500'>
                      privacy policy
                    </a>
                  </>
                }
              />

              <SubmitButton
                isSubmitting={isSubmitting}
                label={isSubmitting ? 'Sending...' : 'Send message'}
                className='w-full bg-green-700 hover:bg-green-800 focus:ring-green-500'
              />
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactForm
