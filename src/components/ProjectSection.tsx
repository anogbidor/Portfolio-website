import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const ProjectSection: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [activeTab, setActiveTab] = React.useState(0)

  // Harmonious color palette with greens and complementary colors
  const tagColors = [
    // Greens
    '#e8f5e9',
    '#c8e6c9',
    '#a5d6a7',
    '#81c784',
    '#66bb6a',
    '#4caf50',
    '#43a047',
    '#2e7d32',
    '#1b5e20',
    '#0d3b0a',
    // Complementary colors
    '#fff8e1',
    '#ffecb3',
    '#ffe082',
    '#ffd54f',
    '#e1f5fe',
    '#b3e5fc',
    '#81d4fa',
    '#4fc3f7',
    '#f3e5f5',
    '#e1bee7',
    '#ce93d8',
    '#ba68c8',
    '#ffebee',
    '#ffcdd2',
    '#ef9a9a',
    '#e57373',
    '#e0f7fa',
    '#b2ebf2',
    '#80deea',
    '#4dd0e1',
  ]

  // Categories for filtering
  const categories = [
    'All',
    'Web Development',
    'Mobile',
    'Full Stack',
    'Utilities',
  ]

  // Function to get a random color from our palette
  const getRandomTagColor = () => {
    const randomIndex = Math.floor(Math.random() * tagColors.length)
    return tagColors[randomIndex]
  }

  // Projects data with title, description, image URL, tags, demo URL, code URL, and category
  const projects = [
    {
      title: 'Shop Easy',
      description:
        'An e-commerce platform with shopping cart functionality, wishlist and more..',
      imageUrl: '/images/shop-easy-scr.png',
      tags: ['HTML', 'CSS', ' Vanilla JavaScript'],
      demoUrl: 'https://shop-easy-kohl.vercel.app/',
      codeUrl: 'https://github.com/anogbidor/Product-listing-page',
      category: 'Web Development',
    },
    {
      title: 'Shelf Space',
      description:
        'ShelfSpace is a responsive, component-based Vue 3 web app for managing a personal book collection. It allows users to add, filter, sort, and favorite books, with features like pagination, search, and a modern UI built with Tailwind CSS. The project demonstrates clean UI design, modular architecture, and dynamic form handling',
      imageUrl: '/images/shelf-space scr.png',
      tags: ['Vue 3', 'Vite', 'Tailwind', 'Vercel'],
      demoUrl: 'https://shelf-space-jade.vercel.app/',
      codeUrl: 'https://github.com/anogbidor/ShelfSpace',
      category: 'Web Development',
    },

    {
      title: 'HealthConnect Platform',
      description:
        'Telemedicine platform connecting patients with healthcare providers.',
      imageUrl: '',
      tags: ['TypeScript', 'GraphQL', 'Firebase', 'Redux', 'Material-UI'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Full Stack',
    },
    {
      title: 'SmartHome Automation',
      description:
        'IoT solution for home automation with voice control integration.',
      imageUrl: '',
      tags: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Mobile',
    },
    {
      title: 'Scientific Calculator',
      description: 'A scientific calculator with advanced features.',
      imageUrl: '/images/scifi-calc.png',
      tags: ['Vue 3', 'Tailwind', 'Vercel'],
      demoUrl: 'https://calculator-blue-rho-13.vercel.app/',
      codeUrl: 'https://github.com/anogbidor/scientific-calculator',
      category: 'Utilities',
    },
    {
      title: 'E-commerce Dashboard',
      description:
        'Analytics dashboard for e-commerce businesses with real-time data.',
      imageUrl: '',
      tags: ['React', 'D3.js', 'Node.js', 'MySQL', 'Chart.js'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Web Development',
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile application for tracking workouts and nutrition.',
      imageUrl: '',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo', 'HealthKit'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Mobile',
    },
  ]

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )

    const matchesCategory =
      activeTab === 0 || project.category === categories[activeTab]

    return matchesSearch && matchesCategory
  })

  return (
    <Box
      sx={{
        mb: 12,
        position: 'relative',
        overflow: 'hidden',
        py: 8,
        px: { xs: 2, md: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: 'url(public/images/projectbckdrp.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: isMobile ? '70% auto' : '40% auto',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'all 0.4s ease',
        },
        '&:hover::before': {
          opacity: 0.12,
          transform: 'translateY(-10px)',
        },
      }}
    >
      {/* Animated floating dots decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          left: '10%',
          width: 200,
          height: 200,
          background:
            'radial-gradient(circle, rgba(168,230,207,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0px)' },
          },
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant='h3'
          sx={{
            fontWeight: 800,
            mb: 6,
            textAlign: 'center',
            color: '#1a2e19',
            position: 'relative',
            fontSize: { xs: '2rem', md: '2.5rem' },
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #1a2e19, #1e4a1b)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
            },
            '&:hover:after': {
              width: '120px',
              background: 'linear-gradient(90deg, #1e4a1b, #1c3c1a)',
            },
          }}
        >
          Featured Projects
        </Typography>

        {/* View All Projects Button (centered above grid) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Button
            variant='outlined'
            onClick={handleOpen}
            sx={{
              borderColor: '#1a2e19',
              color: '#1a2e19',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(26, 46, 25, 0.05)',
                borderColor: '#1e4a1b',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(26, 46, 25, 0.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            View All Projects
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(8px)',
            borderRadius: 4,
            p: { xs: 2, md: 4 },
            boxShadow: '0 8px 32px rgba(26, 46, 25, 0.1)',
            border: '1px solid rgba(220, 237, 193, 0.3)',
          }}
        >
          <Grid container spacing={4} justifyContent='center'>
            {projects.slice(0, 4).map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 24px rgba(26, 46, 25, 0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={project.imageUrl}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: '4px',
                      borderTopRightRadius: '4px',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='h3'
                      sx={{ fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.tags.map((tag, i) => {
                        const bgColor = getRandomTagColor()
                        const textColor = theme.palette.getContrastText(bgColor)

                        return (
                          <Chip
                            key={i}
                            label={tag}
                            size='small'
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: bgColor,
                              color: textColor,
                              fontWeight: 600,
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                              },
                              transition: 'all 0.2s ease',
                            }}
                          />
                        )
                      })}
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      p: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      size='small'
                      variant='outlined'
                      sx={{
                        borderColor: '#1a2e19',
                        color: '#1a2e19',
                        '&:hover': {
                          backgroundColor: 'rgba(26, 46, 25, 0.05)',
                        },
                      }}
                      href={project.demoUrl}
                    >
                      Live Demo
                    </Button>
                    <Button
                      size='small'
                      variant='contained'
                      sx={{
                        backgroundColor: '#1a2e19',
                        '&:hover': {
                          backgroundColor: '#1e4a1b',
                        },
                      }}
                      href={project.codeUrl}
                    >
                      View Code
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth='lg'
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
            },
          }}
        >
          <DialogTitle
            sx={{
              m: 0,
              p: 3,
              backgroundColor: '#1a2e19',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant='h4' sx={{ fontWeight: 700 }}>
              All Projects
            </Typography>
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ p: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
              <TextField
                fullWidth
                variant='outlined'
                placeholder='Search projects...'
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  },
                }}
              />
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant='scrollable'
                scrollButtons='auto'
                sx={{ mt: 2 }}
              >
                {categories.map((category, index) => (
                  <Tab
                    key={index}
                    label={category}
                    sx={{
                      minWidth: 'unset',
                      fontWeight: 600,
                      '&.Mui-selected': {
                        color: '#1a2e19',
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>
            <Box sx={{ p: 3 }}>
              {filteredProjects.length > 0 ? (
                <Grid container spacing={3}>
                  {filteredProjects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          transition:
                            'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 12px 24px rgba(26, 46, 25, 0.15)',
                          },
                        }}
                      >
                        <CardMedia
                          component='img'
                          height='160'
                          image={project.imageUrl}
                          alt={project.title}
                          sx={{
                            objectFit: 'cover',
                            borderTopLeftRadius: '4px',
                            borderTopRightRadius: '4px',
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            gutterBottom
                            variant='h6'
                            component='h3'
                            sx={{ fontWeight: 600 }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='text.secondary'
                            sx={{ mb: 2 }}
                          >
                            {project.description}
                          </Typography>
                          <Box sx={{ mb: 2 }}>
                            {project.tags.map((tag, i) => {
                              const bgColor = getRandomTagColor()
                              const textColor =
                                theme.palette.getContrastText(bgColor)

                              return (
                                <Chip
                                  key={i}
                                  label={tag}
                                  size='small'
                                  sx={{
                                    mr: 1,
                                    mb: 1,
                                    backgroundColor: bgColor,
                                    color: textColor,
                                    fontWeight: 600,
                                    '&:hover': {
                                      transform: 'translateY(-2px)',
                                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    },
                                    transition: 'all 0.2s ease',
                                  }}
                                />
                              )
                            })}
                          </Box>
                        </CardContent>
                        <Box
                          sx={{
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Button
                            size='small'
                            variant='outlined'
                            sx={{
                              borderColor: '#1a2e19',
                              color: '#1a2e19',
                              '&:hover': {
                                backgroundColor: 'rgba(26, 46, 25, 0.05)',
                              },
                            }}
                            href={project.demoUrl}
                          >
                            Demo
                          </Button>
                          <Button
                            size='small'
                            variant='contained'
                            sx={{
                              backgroundColor: '#1a2e19',
                              '&:hover': {
                                backgroundColor: '#1e4a1b',
                              },
                            }}
                            href={project.codeUrl}
                          >
                            Code
                          </Button>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 8,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{ mb: 2, color: 'text.secondary' }}
                  >
                    No projects found matching your criteria
                  </Typography>
                  <Button
                    variant='outlined'
                    onClick={() => {
                      setSearchTerm('')
                      setActiveTab(0)
                    }}
                    sx={{
                      borderColor: '#1a2e19',
                      color: '#1a2e19',
                    }}
                  >
                    Clear filters
                  </Button>
                </Box>
              )}
            </Box>
          </DialogContent>
        </Dialog>

        <Divider
          sx={{
            my: 8,
            borderColor: 'rgba(26, 46, 25, 0.1)',
            borderBottomWidth: '2px',
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '40px',
              // backgroundImage: 'url(/images/leaf-divider.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default ProjectSection
