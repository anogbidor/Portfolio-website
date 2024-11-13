// components/CardGrid.tsx
import React from 'react'
import Card from './Card'

const CardGrid: React.FC = () => {
  const cardsData = [
    {
      image: '/images/langify.png',
      backgroundColor: '#a3dbd4',
      githubUrl: 'https://github.com/your-repo',
      mediumUrl: 'https://medium.com/@your-profile',
      description:
        'A tool for language learning and practice, leveraging spaced repetition and gamification.',
    },
    {
      image: '/images/projectListing.png',
      backgroundColor: '#b3c7f1',
      githubUrl: 'https://github.com/anogbidor/Product-listing-page',
      mediumUrl: 'https://medium.com/@your-profile',
      description:
        'A clean, responsive product listing page with filtering and sorting features.',
    },
    {
      image: '/images/digitalFrame-project.png',
      backgroundColor: '#dbd4a3',
      githubUrl: 'https://github.com/your-repo',
      mediumUrl: 'https://medium.com/@your-profile',
      description:
        'A customizable digital photo frame project to showcase your favorite moments.',
    },
    {
      image: '/images/Task Manager.png',
      backgroundColor: '#ffff',
      githubUrl: 'https://github.com/your-repo',
      mediumUrl: 'https://medium.com/@your-profile',
      description:
        'A task manager app to help you organize and prioritize your to-do list efficiently.',
    },
    {
      image: '/images/GitHub-user-project.png',
      backgroundColor: '#d094e5',
      githubUrl: 'https://github.com/your-repo',
      mediumUrl: 'https://medium.com/@your-profile',
      description:
        'A GitHub user search tool that lets you view user profiles and repositories.',
    },
    {
      image: '/images/pokemonLibrary.png',
      backgroundColor: '#e7b89c',
      githubUrl: 'https://github.com/your-repo',
      mediumUrl: 'https://medium.com/@your-profile',
      description:
        'An extensive library of Pokémon data with filters and detailed information.',
    },
  ]

  return (
    <div className='flex flex-wrap justify-center gap-6 p-6 bg-custom-light-soft-green min-h-screen rounded-lg'>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          backgroundColor={card.backgroundColor}
          githubUrl={card.githubUrl}
          mediumUrl={card.mediumUrl}
          description={card.description}
        />
      ))}
    </div>
  )
}

export default CardGrid
