interface Post {
  id: number
  title: string
  description: string
  date: string
  datetime: string
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
      'An SEO strategy is a plan to create, optimize, and promote content to improve its visibility in search engine results, attracting more organic traffic to a website. It involves a variety of techniques, such as keyword research, on-page optimization, technical SEO, and link building.',
    date: 'Oct 24, 2024',
    datetime: '2021-04-20',
    category: {
      title: 'SEO Strategy',
      href: 'https://backlinko.com/seo-strategy',
    },
    author: {
      name: 'Brian Dean',
      role: 'Founder of Backlinko',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=256&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdvbWFufGVufDB8fHx8MTY3Njc4Mzg2Mg&ixlib=rb-1.2.1&q=80&w=256',
    },
  },
  {
    id: 3,
    title: 'Benefits of Understanding Execution Context in JavaScript',
    href: 'https://medium.com/@abrahamogbidor/benefits-of-understanding-execution-context-in-javascript-18b98f93c0d4?source=your_stories_page-------------------------------------',
    description:
      'An execution context is a fundamental concept in the JavaScript programming language that helps to determine how a piece of code is executed..',
    date: 'Apr 22, 2023',
    datetime: '2021-06-30',
    category: {
      title: 'Frontend Engineer',
      href: 'https://www.linkedin.com/in/abraham-ogbidor',
    },
    author: {
      name: 'Abraham Ogbidor',
      role: 'Ethusiatic Frontend Developer & Blogger',
      href: 'https://github.com/anogbidor',
      imageUrl:
        'https://avatars.githubusercontent.com/u/105780279?s=400&u=f4613604e168df077d3552517781030960890b7e&v=4',
    },
  },
  {
    id: 4,
    title: 'A guide to building an effective team',
    href: '#',
    description:
      "Many organizations are moving to flatter team-oriented structures, so it's essential to understand what makes teams cohesive, productive, and thus effective. What do we mean by an effective team?",
    date: 'Jan 5, 2022',
    datetime: '2022-01-05',
    category: { title: 'Leadership and Employee Development', href: '#' },
    author: {
      name: 'Chloe Hamman',
      role: 'Director of People Science, Product, Culture Amp',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1564564295391-7f24f26f568b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=256&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxidXNpbmVzc3xlbnwwfHx8fDE2NzcxNjgwMzM&ixlib=rb-1.2.1&q=80&w=256',
    },
  },
  {
    id: 5,
    title: 'The power of networking in business',
    href: 'https://wearebrain.com/blog/the-power-of-networking/',
    description:
      'Networking – it’s a term we’ve all heard countless times, often associated with mingling at events, exchanging business cards, and sending LinkedIn connection requests. But its true essence lies beyond these surface-level interactions.',
    date: 'May 21, 2024',
    datetime: '2022-02-14',
    category: {
      title: 'Entrepreneurship Insights',
      href: 'https://wearebrain.com/insights/entrepreneurship/',
    },
    author: {
      name: 'Elvire Jaspers',
      role: "WeAreBrain's CEO",
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNjc2NzgzODYy&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
]
