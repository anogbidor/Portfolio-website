import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#1e4a1b', color: '#ffffff', py: 6 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ fontWeight: 700, mb: 2 }}>
              Abraham
            </Typography>
            <Typography variant='body2'>
              A Full Stack Developer creating digital experiences that matter.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>
            <Typography variant='body2' sx={{ mb: 1 }}>
              email@example.com
            </Typography>
            <Typography variant='body2'>+1 (123) 456-7890</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ fontWeight: 700, mb: 2 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <LinkedIn sx={{ color: '#ffffff', cursor: 'pointer' }} />
              <GitHub sx={{ color: '#ffffff', cursor: 'pointer' }} />
              <Email sx={{ color: '#ffffff', cursor: 'pointer' }} />
            </Box>
          </Grid>
        </Grid>
        <Divider
          sx={{
            my: 4,
            backgroundColor: 'rgba(255,255,255,0.1)',
          }}
        />
        <Typography variant='body2' sx={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} Abraham. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
