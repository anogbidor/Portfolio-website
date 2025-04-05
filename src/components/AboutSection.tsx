import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

const AboutSection: React.FC = () => {
  return (
    <Box sx={{ mb: 12 }}>
      <Typography
        variant='h3'
        sx={{
          fontWeight: 700,
          mb: 6,
          textAlign: 'center',
          color: '#1a2e19',
          position: 'relative',
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
          },
        }}
      >
        About Me
      </Typography>
      <Grid container spacing={6} alignItems='center'>
        <Grid item xs={12} md={6}>
          <Avatar
            src='/path-to-your-image.jpg'
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: 400,
              borderRadius: 2,
              mx: 'auto',
              display: 'block',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='body1' sx={{ mb: 3, fontSize: '1.1rem' }}>
            I'm a passionate Full Stack Developer with 5+ years of experience
            building web applications. My focus is on creating intuitive,
            accessible user experiences with clean, maintainable code.
          </Typography>
          <Typography variant='body1' sx={{ mb: 3, fontSize: '1.1rem' }}>
            When I'm not coding, you can find me hiking, reading sci-fi novels,
            or experimenting with new cooking recipes.
          </Typography>
          <Button
            variant='contained'
            size='large'
            sx={{
              background: 'linear-gradient(90deg, #1a2e19, #1e4a1b)',
              color: '#ffffff',
              fontWeight: 600,
              mt: 2,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              },
            }}
          >
            Download Resume
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutSection
