import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import  Typography  from '@mui/material/Typography'

const AppNavBar: React.FC = () => {

   const [showBackground, setShowBackground] = React.useState(false)

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

  return (
    <AppBar
      position='fixed'
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
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
              bgcolor: showBackground ? '#314833' : 'transparent', // Change background based on scroll
              transition: 'background-color 0.3s ease', // Smooth transition,
              padding: '3px',
              borderRadius: '16px',
            }}
          >
            <Button
              variant='text'
              color='inherit'
              size='small'
              sx={{
                minWidth: 0,
                '&: hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                borderRadius: '12px',
              }}
            >
              <Typography
                variant='subtitle1'
                color='#cfe9df'
                sx={{ textTransform: 'capitalize', fontSize: '1rem' }}
              >
                {' '}
                Projects
              </Typography>
            </Button>
            <Button
              variant='text'
              color='inherit'
              size='small'
              sx={{
                minWidth: 0,
                '&: hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                borderRadius: '12px',
              }}
            >
              <Typography
                variant='subtitle1'
                color='#cfe9df'
                sx={{ textTransform: 'capitalize', fontSize: '1rem' }}
              >
                Blogs
              </Typography>
            </Button>
            <Button
              variant='text'
              color='inherit'
              size='small'
              sx={{
                minWidth: 0,
                '&: hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                borderRadius: '12px',
              }}
            >
              <Typography
                variant='subtitle1'
                color='#cfe9df'
                sx={{ textTransform: 'capitalize', fontSize: '1rem' }}
              >
                Contact
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default AppNavBar
