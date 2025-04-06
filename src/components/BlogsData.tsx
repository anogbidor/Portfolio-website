interface Post {
  id: number
  title: string
  description: string
  date: string
  datetime: string
  readingTime: string
  isFeatured: boolean
  href: string
  category: { title: string; href: string }
  author: { name: string; role: string; href: string; imageUrl: string }
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'How to Do a Market Research for a Startup: A Complete Guide',
    href: 'https://www.semrush.com/blog/market-research-for-startups/',
    description:
      'Learn how to perform market research that can ensure your startup’s success with our detailed guide..',
    date: 'Oct 18, 2024',
    datetime: '2020-03-16',
    readingTime: '8 min read',
    isFeatured: true,
    category: {
      title: ' General Marketing',
      href: 'https://www.semrush.com/blog/category/marketing/general-marketing/',
    },
    author: {
      name: 'Boris Mustapic',
      role: 'Head of Content AT Weflow',
      href: 'https://www.semrush.com/blog/user/boris-mustapic/',
      imageUrl:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvbWFufGVufDB8fHx8MTY3Njc4Mzg2Mg&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'SEO Strategy: How to Create an Effective Plan',
    href: 'https://backlinko.com/seo-strategy ',
    description:
      'An SEO strategy is a plan to create, optimize, and promote content to improve its visibility in search engine results...',
    date: 'Oct 24, 2024',
    datetime: '2021-04-20',
    readingTime: '6 min read',
    isFeatured: false,
    category: {
      title: 'SEO Strategy',
      href: 'https://backlinko.com/seo-strategy',
    },
    author: {
      name: 'Brian Dean',
      role: 'Founder of Backlinko',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?...',
    },
  },
  {
    id: 3,
    title: 'Benefits of Understanding Execution Context in JavaScript',
    href: 'https://medium.com/@abrahamogbidor/...',
    description:
      'An execution context is a fundamental concept in the JavaScript programming language...',
    date: 'Apr 22, 2023',
    datetime: '2021-06-30',
    readingTime: '4 min read',
    isFeatured: true,
    category: {
      title: 'Frontend Engineer',
      href: 'https://www.linkedin.com/in/abraham-ogbidor',
    },
    author: {
      name: 'Abraham Ogbidor',
      role: 'Enthusiastic Frontend Developer & Blogger',
      href: 'https://github.com/anogbidor',
      imageUrl: 'https://avatars.githubusercontent.com/u/105780279?...',
    },
  },
  {
    id: 4,
    title: 'A guide to building an effective team',
    href: '#',
    description:
      'Many organizations are moving to flatter team-oriented structures...',
    date: 'Jan 5, 2022',
    datetime: '2022-01-05',
    readingTime: '5 min read',
    isFeatured: false,
    category: {
      title: 'Leadership & Development',
      href: '#',
    },
    author: {
      name: 'Chloe Hamman',
      role: 'Director of People Science, Product, Culture Amp',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1564564295391-7f24f26f568b?...',
    },
  },
  {
    id: 5,
    title: 'The power of networking in business',
    href: 'https://wearebrain.com/blog/the-power-of-networking/',
    description: 'Networking – it’s a term we’ve all heard countless times...',
    date: 'May 21, 2024',
    datetime: '2022-02-14',
    readingTime: '7 min read',
    isFeatured: true,
    category: {
      title: 'Entrepreneurship Insights',
      href: 'https://wearebrain.com/insights/entrepreneurship/',
    },
    author: {
      name: 'Elvire Jaspers',
      role: "WeAreBrain's CEO",
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?...',
    },
  },
]
