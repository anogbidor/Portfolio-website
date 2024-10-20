import * as React from 'react'
import { Box, Typography, Card, CardMedia } from '@mui/material'

const About: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt="Seán's Profile Picture"
          height='140'
          image='path/to/your/image.jpg'
        />
        <Box sx={{ p: 2 }}>
          <Typography variant='h5' component='div'>
            I'm Seán.
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            I'm a Product Designer working remotely from 15°C Dublin, Ireland.
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default About
