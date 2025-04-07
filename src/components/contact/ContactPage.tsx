// components/Contact/ContactPage.tsx
'use client'
import ContactForm from './contactForm/ContactForm'
import FloatingChat from './FloatingChat'

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 p-4 sm:p-6'>
      <FloatingChat />
      <div className='w-full max-w-4xl'>
        <div className='mx-auto max-w-2xl text-center mb-12'>
          <h2 className=' mt-20 text-4xl font-bold text-white sm:text-5xl'>
            Get in touch
          </h2>
          <p className='mt-4 text-lg text-white/90'>
            I understand that feedback is a crucial part of growth.
          </p>
          <div className='w-20 h-1 bg-white/80 rounded-full mx-auto mt-6' />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
