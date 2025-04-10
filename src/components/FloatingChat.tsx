import React, { useState, useEffect, useRef } from 'react'
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'
import { qna } from './FloatingChatQnA'

interface Message {
  text: string
  sender: 'user' | 'bot'
  isPrompt?: boolean
}

const FloatingChat: React.FC = () => {
  const [chatOpen, setChatOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Airis, I take care of your queries.",
      sender: 'bot',
    },
    {
      text: 'Try asking me about:',
      sender: 'bot',
      isPrompt: true,
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const suggestedPrompts = qna.map((item) => item.question)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (chatOpen) {
      document.body.classList.add('chat-open')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('chat-open')
      document.body.style.overflow = ''
    }

    return () => {
      document.body.classList.remove('chat-open')
      document.body.style.overflow = ''
    }
  }, [chatOpen])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessages: Message[] = [
      ...messages,
      { text: inputValue, sender: 'user' },
    ]
    setMessages(newMessages)
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const foundResponse = qna.find(
        (item) =>
          inputValue
            .toLowerCase()
            .includes(item.question.toLowerCase().split(' ')[0]) ||
          item.question
            .toLowerCase()
            .includes(inputValue.toLowerCase().split(' ')[0])
      )

      const response = foundResponse
        ? foundResponse.answer
        : "I'm not sure about that. Try asking about my projects, skills, availability, or contact information."

      setMessages((prev) => [...prev, { text: response, sender: 'bot' }])
      setIsTyping(false)

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: 'What else would you like to know?',
            sender: 'bot',
            isPrompt: true,
          },
        ])
      }, 8000)
    }, 1500)
  }

  const handlePromptClick = (prompt: string) => {
    const newMessages: Message[] = [
      ...messages,
      { text: prompt, sender: 'user' },
    ]
    setMessages(newMessages)
    setIsTyping(true)

    setTimeout(() => {
      const foundResponse = qna.find(
        (item) =>
          prompt
            .toLowerCase()
            .includes(item.question.toLowerCase().split(' ')[0]) ||
          item.question
            .toLowerCase()
            .includes(prompt.toLowerCase().split(' ')[0])
      )

      const response = foundResponse
        ? foundResponse.answer
        : "I'm not sure about that. Try asking about my projects, skills, availability, or contact information."

      setMessages((prev) => [...prev, { text: response, sender: 'bot' }])
      setIsTyping(false)

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: 'What else would you like to know?',
            sender: 'bot',
            isPrompt: true,
          },
        ])
      }, 8000)
    }, 1500)
  }

  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return text.split(urlRegex).map((part, i) => {
      if (urlRegex.test(part)) {
        try {
          const url = new URL(part)
          const displayUrl = `${url.hostname}/...`
          return (
            <a
              key={i}
              href={part}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline break-words'
            >
              {displayUrl}
            </a>
          )
        } catch {
          return part
        }
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 transition-all duration-300 z-[1000] ${
        chatOpen ? 'w-80 h-96' : 'w-16 h-16'
      }`}
    >
      <button
        type='button'
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
          {/* 💡 Adjust the padding below to increase/decrease the header height */}
          <div className='bg-green-700 text-white p-4'>
            <h3 className='font-semibold'>Chat with Airis</h3>
            <p className='text-xs opacity-80'>
              Try asking about my projects, skills, availability, or contact.
            </p>
          </div>
          <div className='flex-1 p-4 overflow-y-auto'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 max-w-[80%] break-words ${
                  message.sender === 'bot'
                    ? 'bg-gray-100 rounded-lg p-3'
                    : 'ml-auto bg-green-100 rounded-lg p-3'
                }`}
              >
                <p className='text-sm break-words'>
                  {renderMessageText(message.text)}
                </p>
                <p className='text-xs text-gray-500 mt-1'>
                  {message.sender === 'bot' ? 'Airis' : 'You'} • Just now
                </p>
                {message.isPrompt && (
                  <div className='mt-2 space-y-1'>
                    {suggestedPrompts.map((prompt, i) => (
                      <button
                        type='button'
                        key={i}
                        onClick={() => handlePromptClick(prompt)}
                        className='block w-full text-left text-xs text-green-700 hover:text-green-900 hover:underline'
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className='mb-3 max-w-[80%] bg-gray-100 rounded-lg p-3'>
                <div className='flex space-x-1'>
                  <div className='w-2 h-2 rounded-full bg-gray-400 animate-bounce'></div>
                  <div
                    className='w-2 h-2 rounded-full bg-gray-400 animate-bounce'
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className='w-2 h-2 rounded-full bg-gray-400 animate-bounce'
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className='p-3 border-t border-gray-200'>
            <div className='flex items-center'>
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder='Type your message...'
                className='flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500'
              />
              <button
                type='button'
                onClick={handleSendMessage}
                className='bg-green-700 text-white px-3 py-2 rounded-r-lg hover:bg-green-800 transition-colors'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FloatingChat
