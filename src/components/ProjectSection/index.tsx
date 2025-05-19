import React, { useState } from 'react'
import FeaturedProjects from './FeaturedProjects'
import ProjectsDialog from './ProjectsDialog'

const ProjectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className='py-16 px-4 max-w-6xl mx-auto mb-10'>
      <h2 className='text-4xl font-bold text-center text-green-900 mb-8 relative'>
        Featured Projects
        <span className='block h-1 w-20 bg-gradient-to-r from-green-900 to-green-700 rounded-full mx-auto mt-2' />
      </h2>

      <div className='flex justify-center mb-8'>
        <button
          type='button'
          onClick={openModal}
          className='text-green-800 border border-green-800 px-6 py-2 rounded font-semibold hover:bg-mint-hover transition'
        >
          View All Projects
        </button>
      </div>

      <FeaturedProjects />

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6'>
            {/* Close Button */}
       <button
              type='button'
              onClick={closeModal}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold'
              aria-label='Close'
            >
              &times;
            </button>

            {/* Modal Content */}
            <ProjectsDialog />
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectSection
