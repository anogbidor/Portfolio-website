import React from 'react'
import { getRandomTagStyle } from './utils'

interface Project {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  demoUrl: string
  codeUrl: string
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full border border-gray-100'>
      {project.imageUrl && (
        <div className='relative overflow-hidden h-80'>
          {' '}
          
          <img
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent' />{' '}
         
        </div>
      )}

      <div className='p-5 flex flex-col flex-grow'>
        <div className='flex-grow flex flex-col'>
          <div className='mb-3'>
            <h3 className='text-xl font-bold text-gray-900'>{project.title}</h3>
          </div>

          
          <div className='mb-4 max-h-[90px] overflow-y-auto'>
            {' '}
            
            <p className='text-gray-600 leading-relaxed text-sm'>
              {project.description}
            </p>
          </div>

          {/* Tags container */}
          <div className='mt-auto'>
            <div className='flex flex-wrap gap-2 min-h-[40px] items-start'>
              {project.tags.map((tag, i) => {
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
        </div>

        <div className='flex justify-between items-center mt-4 pt-3 border-t border-gray-100'>
          <a
            href={project.demoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-700 border border-green-700 px-4 py-2 rounded-lg hover:bg-green-50 hover:border-green-800 hover:text-green-800 text-sm font-medium transition-all duration-200 flex items-center gap-1'
            aria-label={`View demo of ${project.title}`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
            Demo
          </a>
          <a
            href={project.codeUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 text-sm font-medium transition-all duration-200 flex items-center gap-1 shadow-md hover:shadow-green-700/30'
            aria-label={`View code for ${project.title}`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              />
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
