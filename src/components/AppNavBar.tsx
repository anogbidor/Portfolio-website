import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const AppNavBar: React.FC = () => {
  const [showBackground, setShowBackground] = React.useState(false)
  const [activeButton, setActiveButton] = React.useState('work') // Set 'work' as the active button by default

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowBackground(true)
    } else {
      setShowBackground(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Function to handle button click
  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  }

  return (
    <nav>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 0,
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          top: 0,
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 0,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                bgcolor: showBackground
                  ? 'rgba(62, 107, 98, 0.7)'
                  : 'transparent',
                transition: 'background-color 0.3s ease',
                padding: '2px',
                borderRadius: '16px',
                backdropFilter: showBackground ? 'blur(10px)' : 'none',
                WebkitBackdropFilter: showBackground ? 'blur(10px)' : 'none',
              }}
            >
              <Link href='/work' passHref>
                <Button
                  variant={activeButton === 'work' ? 'contained' : 'text'}
                  color='inherit'
                  size='small'
                  onClick={() => handleButtonClick('work')}
                  sx={{
                    minWidth: 0,
                    // '&:hover': {
                    //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    //   color: '#cfe9df',
                    // },
                    borderRadius: '12px',
                    bgcolor:
                      activeButton === 'work' ? '#cfe9df' : 'transparent',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    color={activeButton === 'work' ? '#000' : '#cfe9df'}
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: '0.9rem',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Work
                  </Typography>
                </Button>
              </Link>

              <Link href='/blogs' passHref>
                <Button
                  variant={activeButton === 'blogs' ? 'contained' : 'text'}
                  color='inherit'
                  size='small'
                  onClick={() => handleButtonClick('blogs')}
                  sx={{
                    minWidth: 0,
                    // '&:hover': {
                    //   bgcolor: 'rgba(255, 255, 255, 0.1)',
                    //   color: '#cfe9df',
                    // },
                    borderRadius: '12px',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    color={activeButton === 'blogs' ? '#000' : '#cfe9df'}
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: '0.9rem',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    Blogs
                  </Typography>
                </Button>
              </Link>
              <Link href='about' passHref>
                <Button
                  variant={activeButton === 'about' ? 'contained' : 'text'}
                  color='inherit'
                  size='small'
                  onClick={() => handleButtonClick('about')}
                  sx={{
                    minWidth: 0,
                    // '&:hover': {
                    //   bgcolor: 'rgba(255, 255, 255, 0.1)',
                    //   color: '#cfe9df',
                    // },
                    borderRadius: '12px',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    color={activeButton === 'about' ? '#000' : '#cfe9df'}
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: '0.9rem',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    About
                  </Typography>
                </Button>
              </Link>
              <Button
                variant={activeButton === 'article' ? 'contained' : 'text'}
                color='inherit'
                size='small'
                onClick={() => handleButtonClick('article')}
                sx={{
                  minWidth: 0,
                  // '&:hover': {
                  //   bgcolor: 'rgba(255, 255, 255, 0.1)',
                  //   color: '#cfe9df',
                  // },
                  borderRadius: '12px',
                }}
              >
                <Typography
                  variant='subtitle1'
                  color={activeButton === 'article' ? '#000' : '#cfe9df'}
                  sx={{
                    textTransform: 'capitalize',
                    fontSize: '0.9rem',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Article
                </Typography>
              </Button>
              <Button
                variant={activeButton === 'contact' ? 'contained' : 'text'}
                color='inherit'
                size='small'
                onClick={() => handleButtonClick('contact')}
                sx={{
                  minWidth: 0,
                  // '&:hover': {
                  //   bgcolor: 'rgba(255, 255, 255, 0.1)',
                  //   color: '#cfe9df',
                  // },
                  borderRadius: '12px',
                }}
              >
                <Typography
                  variant='subtitle1'
                  color={activeButton === 'contact' ? '#000' : '#cfe9df'}
                  sx={{
                    textTransform: 'capitalize',
                    fontSize: '0.9rem',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Contact
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </nav>
  )
}

export default AppNavBar
