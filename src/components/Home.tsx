import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Cards from './Cards'
import AppNavBar from './AppBar'

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #5c6a4f,  #3b7b34)',
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
      {/* Hero Section */}
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          fontSize: '4rem',
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
          fontSize: '4rem',
          lineHeight: '1.2',
          mb: 4,
        }}
      >
        A Frontend Developer.
      </Typography>

      {/* Subtext */}
      <Typography
        variant='subtitle1'
        sx={{ fontSize: '1rem', color: '#cfe9df' }}
      >
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </Typography>
      <Cards />
    </Box>
  )
}

export default Home
