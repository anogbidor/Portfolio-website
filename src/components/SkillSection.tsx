import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'MUI',
  'GraphQL',
  'AWS',
  'Python',
  'Docker',
]

const SkillsSection: React.FC = () => {
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
        My Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item xs={6} sm={4} md={3} key={skill}>
            <Box
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                backgroundColor: '#f5f5f5',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                {skill}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 8 }} />
    </Box>
  )
}

export default SkillsSection
