import React, { useState } from 'react'
import { projects } from './ProjectsData'
import CategoryTabs from './CategoryTabs'
import ProjectCard from './ProjectCard'

const ProjectsDialog: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = projects.filter((project) => {
    const matchesCategory =
      activeTab === 'All' || project.category === activeTab
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    return matchesCategory && matchesSearch
  })

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-center mb-6 text-green-900'>
        All Projects
      </h2>

      {/* Search bar */}
      <div className='flex justify-center mb-4'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search projects...'
          className='w-full max-w-md px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
        />
      </div>

      {/* Filter tabs */}
      <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
          {filtered.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <div className='text-center py-12 text-gray-600'>
          <p className='mb-4'>No projects found matching your criteria.</p>
       <button
            type='button'
            onClick={() => {
              setSearchTerm('')
              setActiveTab('All')
            }}
            className='px-4 py-2 rounded bg-green-100 text-green-900 font-medium border border-green-700 hover:bg-green-200'
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectsDialog
