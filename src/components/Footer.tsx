import React from 'react'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'

const Footer: React.FC = () => {
  return (
    <footer className='bg-green-900 text-white py-12'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mb-8'>
          {/* About Section */}
          <div className='flex-1'>
            <h3 className='text-xl font-bold mb-4'>Abraham</h3>
            <p className='text-gray-300'>
              A passionate Full Stack Developer crafting exceptional digital
              experiences that make an impact.
            </p>
          </div>

          {/* Contact Section */}
          <div className='flex-1'>
            <h3 className='text-xl font-bold mb-4'>Contact</h3>
            <p className='text-gray-300 mb-2 hover:text-white transition-colors'>
              homenoffice247@gmail.com
            </p>
            <p className='text-gray-300 hover:text-white transition-colors'>
              +90 (533) 161-2400
            </p>
          </div>

          {/* Connect Section */}
          <div className='flex-1'>
            <h3 className='text-xl font-bold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <LinkedIn
                className='text-white hover:text-green-300 cursor-pointer transition-colors'
                fontSize='medium'
              />
              <GitHub
                className='text-white hover:text-green-300 cursor-pointer transition-colors'
                fontSize='medium'
              />
              <Email
                className='text-white hover:text-green-300 cursor-pointer transition-colors'
                fontSize='medium'
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white border-opacity-10 my-6'></div>

        {/* Copyright */}
        <p className='text-center text-gray-400 text-sm'>
          © {new Date().getFullYear()} Abraham. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
