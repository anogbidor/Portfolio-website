// components/Contact/FloatingChat.tsx
import React, { useState, useEffect } from 'react'
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'

const FloatingChat: React.FC = () => {
  const [chatOpen, setChatOpen] = useState<boolean>(false)

  useEffect(() => {
    if (chatOpen) {
      document.body.classList.add('chat-open')
      document.body.style.overflow = 'hidden' // Prevent scrolling
    } else {
      document.body.classList.remove('chat-open')
      document.body.style.overflow = '' // Restore scrolling
    }

    return () => {
      document.body.classList.remove('chat-open')
      document.body.style.overflow = ''
    }
  }, [chatOpen])

  return (
    <>
      <div
        className={`fixed bottom-8 right-8 transition-all duration-300 z-[1000] ${
          chatOpen ? 'w-80 h-96' : 'w-16 h-16'
        }`}
      >
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className='absolute bottom-0 right-0 w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center shadow-lg hover:bg-green-800 transition-colors z-10'
        >
          {chatOpen ? (
            <XMarkIcon className='w-6 h-6' />
          ) : (
            <ChatBubbleLeftRightIcon className='w-6 h-6' />
          )}
        </button>

        {chatOpen && (
          <div className='absolute bottom-20 right-0 w-full h-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200 z-[1000]'>
            <div className='bg-green-700 text-white p-4'>
              <h3 className='font-semibold'>Live Chat Support</h3>
              <p className='text-xs opacity-80'>
                Typically replies in 5 minutes
              </p>
            </div>
            <div className='flex-1 p-4 overflow-y-auto'>
              <div className='bg-gray-100 rounded-lg p-3 mb-3 max-w-[80%]'>
                <p className='text-sm'>Hello! How can we help you today?</p>
                <p className='text-xs text-gray-500 mt-1'>Abraham • Just now</p>
              </div>
            </div>
            <div className='p-3 border-t border-gray-200'>
              <div className='flex items-center'>
                <input
                  type='text'
                  placeholder='Type your message...'
                  className='flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500'
                />
                <button
                  type='submit'
                  className='bg-green-700 text-white px-3 py-2 rounded-r-lg hover:bg-green-800 transition-colors'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FloatingChat
