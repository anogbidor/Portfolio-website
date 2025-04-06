'use client'
import { useState } from 'react'
import ContactHeader from './ContactHeader'
import SuccessMessage from './SuccessMessage'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
import PhoneInput from './PhoneInput'
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
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
      })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  return (
    <div className='min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 p-4 sm:p-6'>
      <div className='w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 z-0'>
        {' '}
        {/* Changed to z-0 */}
        <div className='flex flex-col md:flex-row'>
          {/* Left Content - Features */}
          <div className='w-full md:w-1/2 p-6 sm:p-7'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Connect With Us
            </h2>
            <p className='text-gray-600 mb-6'>
              Let's collaborate to bring your ideas to life
            </p>

            <div className='space-y-5'>
              <div className='group'>
                <h3 className='text-base font-medium text-gray-900'>
                  Responsive Solutions
                </h3>
                <p className='text-gray-600 text-sm mt-1'>
                  We deliver tailored digital experiences that adapt to your
                  unique business needs
                </p>
              </div>

              <div className='group'>
                <h3 className='text-base font-medium text-gray-900'>
                  Future-Proof Development
                </h3>
                <p className='text-gray-600 text-sm mt-1'>
                  Our code is built with scalability and longevity in mind for
                  sustainable growth
                </p>
              </div>

              <div className='group'>
                <h3 className='text-base font-medium text-gray-900'>
                  Seamless Experience
                </h3>
                <p className='text-gray-600 text-sm mt-1'>
                  Enjoy intuitive interfaces and frictionless interactions from
                  concept to delivery
                </p>
              </div>

              <div className='group'>
                <h3 className='text-base font-medium text-gray-900'>
                  Cutting-Edge Approach
                </h3>
                <p className='text-gray-600 text-sm mt-1'>
                  Leveraging the latest technologies to create innovative
                  digital solutions
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className='hidden md:block relative'>
            <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-3/5 bg-gray-200' />
          </div>

          {/* Right Content - Form */}
          <div className='w-full md:w-1/2 p-6 sm:p-7'>
            {submitSuccess ? (
              <SuccessMessage
                title='Message sent successfully!'
                message="We'll be in touch shortly."
              />
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 gap-4'>
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
                  <TextAreaField
                    id='message'
                    name='message'
                    label='Message'
                    value={formData.message}
                    required
                    onChange={handleChange}
                    error={errors.message}
                    className='border-gray-300 focus:ring-green-500 focus:border-green-500'
                  />
                </div>

                <Checkbox
                  id='privacy'
                  onChange={handleChange}
                  label={
                    <>
                      I agree to the{' '}
                      <a
                        href='#'
                        className='text-green-600 hover:text-green-500'
                      >
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
    </div>
  )
}

export default ContactForm
