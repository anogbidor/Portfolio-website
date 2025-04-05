import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CardGrid from './CardGrid'

const ProjectsSection: React.FC = () => {
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
        Featured Projects
      </Typography>
      <CardGrid />
      <Divider sx={{ my: 8 }} />
    </Box>
  )
}

export default ProjectsSection
