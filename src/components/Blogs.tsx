import * as React from 'react'
import { posts } from './BlogsData'

const Blogs: React.FC = () => {
  console.log(posts) // Check the posts data

  return (
    <div className='bg-custom-green py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
            From the blog
          </h2>
          <p className='mt-2 text-xl leading-8 font-semibold text-white'>
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='flex items-center gap-x-4 text-xs'>
                <time dateTime={post.datetime} className='text-custom-text'>
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-custom-light-green'
                >
                  {post.category.title}
                </a>
              </div>
              <div className='group relative'>
                <h3 className='mt-3 text-xl font-bold leading-6 text-custom-text group-hover:text-gray-400'>
                  <a href={post.href}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </a>
                </h3>
                <p className='mt-5 line-clamp-3 text-m leading-6 text-custom-text'>
                  {post.description}
                </p>
              </div>
              <div className='relative mt-8 flex items-center gap-x-4'>
                <img
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  className='h-10 w-10 rounded-full bg-black'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold text-custom-text'>
                    <a href={post.author.href}>
                      <span className='absolute inset-0' />
                      {post.author.name}
                    </a>
                  </p>
                  <p className='text-custom-text'>{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
