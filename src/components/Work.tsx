import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Cards from './Cards'
import AppNavBar from './AppNavBar'


const Work: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #546E51, #394C36, #1C261B)',
        backgroundRepeat: 'repeat',
        color: '#8fdbc2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
        position: 'relative',
        pt: '64px',
      }}
    >
     
      <AppNavBar />
      
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' }, // Responsive font size
          lineHeight: '1.2',
          mb: 2,
          mt: 8,
        }}
      >
        Hi. I'm Abraham.
      </Typography>
      <Typography
        variant='h2'
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '4rem' }, // Responsive font size
          lineHeight: '1.2',
          mb: 4,
        }}
      >
        A Frontend Developer.
      </Typography>

      <Typography
        variant='subtitle1'
        sx={{ fontSize: '1rem', color: '#cfe9df', mb: '20px' }}
      >
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </Typography>

      <Cards />
    </Box>
  )
}

export default Work
