export const categories = [
  'All',
  'Web Development',
  'Mobile',
  'Full Stack',
  'Utilities',
] as const

export type Category = (typeof categories)[number]

export interface Project {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  demoUrl: string
  codeUrl: string
  category: Category
}

export const projects: Project[] = [
  {
    title: 'E-commerce Dashboard with Analytics',
    description:
      'An interactive analytics dashboard for e-commerce businesses featuring real-time sales data visualization. Includes customer segmentation, inventory tracking, and sales forecasting. The dashboard connects to multiple data sources and presents information through customizable widgets and detailed reports.',
    imageUrl: '/images/Shoppora-ss.png', 
    tags: [
      'React',
      'D3.js',
      'Node.js',
      'MySQL',
      'Chart.js',
      'Data Visualization',
    ],
    demoUrl: 'https://ecom-dashboard-indol.vercel.app', 
    codeUrl: 'https://github.com/Anogbidor/ecom-dashboard', 
    category: 'Full Stack',
  },

  {
    title: 'Shop Easy',
    description:
      'A responsive e-commerce product listing application built with modern web technologies. Features include dynamic product filtering, cart functionality with quantity adjustments, and smooth animations. Integrated with the Fake Store API to showcase real product data with loading states and error handling.',
    imageUrl: '/images/shop-easy-scr.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration', 'Responsive Design'],
    demoUrl: 'https://shop-easy-kohl.vercel.app/',
    codeUrl: 'https://github.com/anogbidor/Product-listing-page',
    category: 'Web Development',
  },
  {
    title: 'Shelf Space',
    description:
      'An elegant book collection manager built with Vue 3 Composition API. Includes features like adding/removing books, local storage persistence, and a clean UI with Tailwind CSS. The app utilizes Vite for fast development builds and implements custom animations for a polished user experience.',
    imageUrl: '/images/shelf-space-scr.png',
    tags: ['Vue 3', 'Tailwind', 'Vite', 'Local Storage', 'Composition API'],
    demoUrl: 'https://shelf-space-jade.vercel.app/',
    codeUrl: 'https://github.com/anogbidor/ShelfSpace',
    category: 'Web Development',
  },
  {
    title: 'Scientific Calculator',
    description:
      'A feature-rich scientific calculator application with advanced mathematical functions including trigonometric operations, logarithms, and constants. The calculator features memory functions, history tracking, and a responsive design that works on both mobile and desktop devices. Built with Vue 3 for reactive state management.',
    imageUrl: '/images/scifi-calc.png',
    tags: [
      'Vue 3',
      'Tailwind',
      'Math Functions',
      'Responsive Design',
      'History Tracking',
    ],
    demoUrl: 'https://calculator-blue-rho-13.vercel.app/',
    codeUrl: 'https://github.com/anogbidor/scientific-calculator',
    category: 'Utilities',
  },

  {
    title: 'SmartHome Automation',
    description:
      'A comprehensive IoT home automation system that enables remote control of smart devices through a mobile interface. Features include voice command integration (Alexa/Google Assistant), energy usage monitoring, automated routines, and real-time notifications. The backend handles device synchronization across multiple users.',
    imageUrl: '',
    tags: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS IoT', 'REST API'],
    demoUrl: '#',
    codeUrl: '#',
    category: 'Mobile',
  },

  {
    title: 'Fitness Tracker',
    description:
      'A cross-platform mobile application for comprehensive fitness tracking. Features include workout logging with exercise demonstrations, nutrition tracking with barcode scanning, progress analytics, and social sharing. Integrates with Apple HealthKit/Google Fit and supports offline functionality with cloud synchronization.',
    imageUrl: '',
    tags: [
      'React Native',
      'Firebase',
      'Redux',
      'Expo',
      'HealthKit',
      'Offline First',
    ],
    demoUrl: '#',
    codeUrl: '#',
    category: 'Mobile',
  },
  {
    title: 'TaskFlow Productivity Suite',
    description:
      'A full-featured productivity application combining task management, time tracking, and team collaboration tools. Features include Kanban boards, Gantt charts, time blocking, and integration with calendar services. The application supports real-time collaboration with presence indicators and change notifications.',
    imageUrl: '',
    tags: [
      'MERN Stack',
      'WebSockets',
      'JWT Auth',
      'MongoDB',
      'Agile Methodology',
    ],
    demoUrl: '#',
    codeUrl: '#',
    category: 'Full Stack',
  },
  {
    title: 'Weather Forecast Pro',
    description:
      'A weather application providing hyper-local forecasts with animated weather representations. Features include severe weather alerts, pollen/air quality indexes, and historical weather data comparison. The app uses geolocation and supports saving multiple locations with customizable notification triggers.',
    imageUrl: '',
    tags: [
      'React',
      'OpenWeather API',
      'Geolocation',
      'Chart.js',
      'Service Workers',
    ],
    demoUrl: '#',
    codeUrl: '#',
    category: 'Utilities',
  },
]
