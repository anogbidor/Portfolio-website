import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AppNavBar: React.FC = () => {
  const router = useRouter()
  const [showBackground, setShowBackground] = React.useState(false)

  // Handle scroll event
  const handleScroll = () => {
    setShowBackground(window.scrollY > 50)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getActiveButton = () => {
    switch (router.pathname) {
      case '/work':
        return 'work'
      case '/blogs':
        return 'blogs'
      case '/about':
        return 'about'
      case '/article':
        return 'article'
      case '/contact':
        return 'contact'
      default:
        return 'work'
    }
  }

  
  const textColor = '#000'; 

  return (
    <nav>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 0,
          backgroundColor: 'transparent',
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
                borderRadius: '12px',
                backdropFilter: showBackground ? 'blur(2px)' : 'none',
                WebkitBackdropFilter: showBackground ? 'blur(2px)' : 'none',
              }}
            >
              {['work', 'blogs', 'about', 'article', 'contact'].map((page) => (
                <Link key={page} href={`/${page}`} passHref>
                  <Button
                    variant={getActiveButton() === page ? 'contained' : 'text'}
                    color='inherit'
                    size='small'
                    sx={{
                      minWidth: 0,
                      borderRadius: '12px',
                      bgcolor:
                        getActiveButton() === page ? '#cfe9df' : 'transparent',
                    }}
                  >
                    <Typography
                      variant='subtitle1'
                      color={getActiveButton() === page ? textColor : '#cfe9df'}
                      sx={{
                        textTransform: 'capitalize',
                        fontSize: '0.8rem',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </Typography>
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </AppBar>
    </nav>
  )
}

export default AppNavBar
