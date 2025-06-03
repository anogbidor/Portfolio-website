import React from 'react'
import { projects } from './ProjectsData'
import {
  getRandomTagStyle,
  getRandomButtonStyle,
  getRandomCategoryStyle,
} from './utils'

const FeaturedProject: React.FC = () => {
  const featuredProject = projects[0]
  const hasDemo = featuredProject.demoUrl && featuredProject.demoUrl !== '#'
  const hasCode = featuredProject.codeUrl && featuredProject.codeUrl !== '#'

  // Generate random styles that persist between renders
  const [styles] = React.useState({
    button: getRandomButtonStyle(),
    category: getRandomCategoryStyle(),
  })

  const renderLink = (type: 'demo' | 'code') => {
    const url =
      type === 'demo' ? featuredProject.demoUrl : featuredProject.codeUrl
    const isDisabled = type === 'demo' ? !hasDemo : !hasCode
    const label = type === 'demo' ? 'Live Demo' : 'View Code'

    if (isDisabled) {
      return (
        <span
          className={`px-6 py-3 rounded-lg font-medium ${
            type === 'demo'
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-300'
              : 'border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300'
          }`}
          aria-disabled='true'
        >
          {label}
        </span>
      )
    }

    return (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={`px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90`}
        style={type === 'demo' ? styles.button : undefined}
      >
        {label}
      </a>
    )
  }

  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto'>
       
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl'>
          {/* Hero Image Section */}
          <div className='relative h-80 md:h-96 lg:h-[700px] overflow-hidden'>
            {featuredProject.imageUrl ? (
              <img
                src={featuredProject.imageUrl}
                alt={featuredProject.title}
                className='w-full h-full object-cover object-center'
              />
            ) : (
              <div className='w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center'>
                <span className='text-white text-2xl font-medium'>
                  {featuredProject.title}
                </span>
              </div>
            )}
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6'>
              <span
                className='inline-block px-3 py-1 text-sm font-medium rounded-full'
                style={styles.category}
              >
                {featuredProject.category}
              </span>
            </div>
          </div>

          {/* Project Details Section */}
          <div className='p-8 md:p-10 lg:p-12'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8'>
              <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2'>
                  {featuredProject.title}
                </h3>
                <p className='text-lg text-gray-600 dark:text-gray-300'>
                  {featuredProject.description}
                </p>
              </div>

              <div className='flex-shrink-0'>
                <div className='flex gap-4'>
                  {renderLink('demo')}
                  {renderLink('code')}
                </div>
              </div>
            </div>

            {/* Technologies Tags */}
            <div className='mb-10'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Technologies Used
              </h4>
              <div className='flex flex-wrap gap-3'>
                {featuredProject.tags.map((tag, i) => {
                  const style = getRandomTagStyle()
                  return (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 rounded-full font-medium hover:scale-105 transition-transform'
                      style={style}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Additional Info Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Project Highlights
                </h4>
                <ul className='space-y-3'>
                  {featuredProject.description
                    .split('. ')
                    .filter((sentence) => sentence.trim().length > 0)
                    .slice(0, 3)
                    .map((highlight, index) => (
                      <li key={index} className='flex items-start'>
                        <svg
                          className='h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span className='text-gray-700 dark:text-gray-300'>
                          {highlight.trim()}.
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Category Details
                </h4>
                <div className='bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg'>
                  <p className='text-gray-700 dark:text-gray-300 mb-2'>
                    <span className='font-medium'>Category:</span>{' '}
                    {featuredProject.category}
                  </p>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {featuredProject.category === 'Web Development' &&
                      'This project demonstrates modern web development techniques and responsive design principles.'}
                    {featuredProject.category === 'Mobile' &&
                      'A mobile application showcasing native device capabilities and cross-platform development.'}
                    {featuredProject.category === 'Full Stack' &&
                      'A complete application demonstrating both frontend and backend development skills.'}
                    {featuredProject.category === 'Utilities' &&
                      'A practical tool designed to solve specific problems efficiently.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject
