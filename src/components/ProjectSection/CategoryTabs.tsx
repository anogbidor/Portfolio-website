import React from 'react'
import { categories } from './ProjectsData'

interface Props {
  activeTab: string
  onTabChange: (tab: string) => void
}

const CategoryTabs: React.FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <div className='flex flex-wrap gap-2 mt-4'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onTabChange(category)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
            activeTab === category
              ? 'bg-green-800 text-white border-green-800'
              : 'bg-white text-green-800 border-green-300 hover:bg-green-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
