import * as React from 'react'
import { posts } from './BlogsData'
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Blogs: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const featuredPost = posts.find((post) => post.isFeatured) || posts[0]
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
    alert('Thanks for subscribing!')
  }

  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      {/* Background layers */}
      <div className='fixed inset-0 bg-gradient-to-br from-green-900/100 via-green-800 to-green-800/100' />
      <div className='fixed inset-0 backdrop-blur-[2px]' />

      {/* Animated floating elements */}
      <div className='fixed top-1/4 -left-20 w-64 h-64 rounded-full bg-green-400/10 blur-xl animate-float' />
      <div className='fixed bottom-1/3 -right-20 w-72 h-72 rounded-full bg-green-600/10 blur-xl animate-float-delay' />

      {/* Content */}
      <div className='relative py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          {/* Header with shining text */}
          <div className='mx-auto max-w-2xl text-center lg:mb-16'>
            <h2 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-200 animate-text-shine'>
                From the blog
              </span>
            </h2>
            <p className='mt-4 text-xl leading-8 text-green-100'>
              <span className='inline-block bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent'>
                Learn how to grow your business with our expert advice
              </span>
            </p>

            <div className='w-16 h-1 bg-white rounded mx-auto mb-10 shadow-sm mt-6' />
          </div>

          {/* Featured Post - now white like others */}
          <div className='relative mb-16 overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl'>
            <div className='px-8 py-12 sm:px-16 sm:py-24 lg:py-32 lg:px-40'>
              <div className='relative z-10 max-w-xl'>
                <span className='inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-1.5 text-sm font-medium text-white shadow-md'>
                  Featured Post
                </span>
                <h3 className='mt-6 text-3xl font-bold text-gray-900 sm:text-4xl'>
                  <a
                    href={featuredPost.href}
                    className='hover:text-green-600 transition-colors'
                  >
                    {featuredPost.title}
                  </a>
                </h3>
                <p className='mt-4 text-lg text-gray-600'>
                  {featuredPost.description}
                </p>
                <div className='mt-6 flex items-center gap-x-4'>
                  <img
                    src={featuredPost.author.imageUrl}
                    alt=''
                    className='h-10 w-10 rounded-full bg-gray-100 ring-2 ring-white shadow'
                  />
                  <div>
                    <p className='font-semibold text-gray-900'>
                      {featuredPost.author.name}
                    </p>
                    <div className='flex items-center gap-2 text-sm'>
                      <span className='text-gray-500'>{featuredPost.date}</span>
                      <span className='text-gray-300'>•</span>
                      <span className='text-green-600 font-medium'>
                        {featuredPost.readingTime} min read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search with improved visibility */}
          <div className='mb-12 relative w-full sm:w-96 mx-auto'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-green-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              type='text'
              placeholder='Search articles...'
              className='w-full rounded-lg border-0 bg-white/90 py-3 pl-10 pr-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-md'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Loading Skeleton */}
          {isLoading ? (
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className='bg-white/90 rounded-2xl p-6 animate-pulse border border-gray-200 shadow'
                >
                  <div className='h-4 bg-gray-200 rounded w-1/4 mb-4'></div>
                  <div className='h-6 bg-gray-200 rounded w-3/4 mb-4'></div>
                  <div className='space-y-3'>
                    <div className='h-3 bg-gray-200 rounded'></div>
                    <div className='h-3 bg-gray-200 rounded w-5/6'></div>
                    <div className='h-3 bg-gray-200 rounded w-2/3'></div>
                  </div>
                  <div className='flex items-center mt-6'>
                    <div className='h-10 w-10 bg-gray-200 rounded-full'></div>
                    <div className='ml-3 space-y-2'>
                      <div className='h-3 bg-gray-200 rounded w-20'></div>
                      <div className='h-2 bg-gray-200 rounded w-16'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Posts Grid */
            <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className='flex max-w-xl flex-col items-start justify-between bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='flex items-center gap-x-4 text-xs'>
                    <time dateTime={post.datetime} className='text-gray-500'>
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className='relative z-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-3 py-1.5 font-medium text-white shadow-sm hover:shadow-md transition-shadow'
                    >
                      {post.category.title}
                    </a>
                  </div>

                  <div className='group relative'>
                    <h3 className='mt-3 text-2xl font-bold leading-6 text-gray-900'>
                      <a
                        href={post.href}
                        className='hover:text-green-600 transition-colors'
                      >
                        <span className='absolute inset-0' aria-hidden='true' />
                        {post.title}
                      </a>
                    </h3>
                    <p className='mt-5 line-clamp-3 text-md leading-6 text-gray-600'>
                      {post.description}
                    </p>
                  </div>

                  <div className='relative mt-8 flex items-center gap-x-4'>
                    <div className='relative h-10 w-10'>
                      <img
                        alt={post.author.name}
                        src={post.author.imageUrl}
                        className='h-10 w-10 rounded-full bg-gray-100 ring-2 ring-white shadow'
                      />
                      <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white'></span>
                    </div>
                    <div className='text-sm leading-6'>
                      <p className='font-semibold text-gray-900'>
                        <a href={post.author.href}>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          {post.author.name}
                        </a>
                      </p>
                      <p className='text-gray-600'>{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter Signup with improved visibility */}
          <div className='mt-24 bg-gradient-to-r from-green-600/90 to-green-700/90 rounded-2xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-sm'>
            <div className='mx-auto max-w-2xl'>
              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg'>
                <EnvelopeIcon className='h-6 w-6 text-green-600' />
              </div>
              <h3 className='mt-4 text-2xl font-bold text-white'>
                <span className='bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent'>
                  Stay updated
                </span>
              </h3>
              <p className='mt-2 text-green-100'>
                Get the latest posts delivered right to your inbox
              </p>
              <form
                onSubmit={handleSubmit}
                className='mt-6 sm:flex max-w-md mx-auto'
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 rounded-lg sm:rounded-r-none border-0 bg-white/90 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type='submit'
                  className='mt-2 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-white text-green-700 font-medium rounded-lg sm:rounded-l-none hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-1 shadow-md hover:shadow-lg'
                >
                  Subscribe
                  <ArrowRightIcon className='h-4 w-4' />
                </button>
              </form>
              <p className='mt-3 text-xs text-green-200'>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
