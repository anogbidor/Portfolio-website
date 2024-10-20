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
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use SEO to drive traffic to your site',
    href: '#',
    description:
      'Quia soluta id aperiam. Repudiandae placeat quo voluptas ea officia. Accusantium deleniti culpa delectus nam. Doloribus aliquid iure veritatis. Aperiam voluptate quam similique deleniti.',
    date: 'Apr 20, 2021',
    datetime: '2021-04-20',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Olivia Rhye',
      role: 'Head of Marketing',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=256&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdvbWFufGVufDB8fHx8MTY3Njc4Mzg2Mg&ixlib=rb-1.2.1&q=80&w=256',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Dolor quos voluptatem nobis ut dolores. Provident sint enim ducimus quibusdam cum voluptas. Eos iure delectus ullam amet placeat aliquam aut. Quia iure sit repellendus temporibus.',
    date: 'Jun 30, 2021',
    datetime: '2021-06-30',
    category: { title: 'Customer Support', href: '#' },
    author: {
      name: 'Jackson Lee',
      role: 'Customer Success Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNjc2NzgzODYy&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'A guide to building an effective team',
    href: '#',
    description:
      'Nemo facilis harum quos asperiores. Rerum itaque reiciendis et accusantium ullam quo. Minima laborum architecto voluptates eum tempore eaque molestias aut eveniet.',
    date: 'Jan 5, 2022',
    datetime: '2022-01-05',
    category: { title: 'Leadership', href: '#' },
    author: {
      name: 'Sophia Walker',
      role: 'CEO & Founder',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvbWFufGVufDB8fHx8MTY3Njc4Mzg2Mg&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'The power of networking in business',
    href: '#',
    description:
      'Totam qui doloremque asperiores pariatur ipsam. Voluptas sit fugiat officiis voluptatem. Rerum reiciendis repudiandae eligendi laborum omnis accusamus.',
    date: 'Feb 14, 2022',
    datetime: '2022-02-14',
    category: { title: 'Networking', href: '#' },
    author: {
      name: 'Benjamin Lewis',
      role: 'Business Development Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1564564295391-7f24f26f568b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=256&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxidXNpbmVzc3xlbnwwfHx8fDE2NzcxNjgwMzM&ixlib=rb-1.2.1&q=80&w=256',
    },
  },
]
