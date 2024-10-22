import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'
import GradientBackground from './SharedBackground'

const CollaborateSection = () => {
  return (
    <GradientBackground
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
      }}
    >
      <SectionWrapper>
        <Typography
          variant='h2'
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#d4f3d9',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Let&apos;s collaborate if you&apos;re committed to sustainability,
          education, equality, or carbon neutrality.
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: '#d4f3d9',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            mb: 6,
          }}
        >
          I believe we should leave this Earth as good as or better than we
          found it for future generations; my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I&apos;d love to
          talk.
        </Typography>

        <Grid container spacing={4}>
          {points.map((point, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box>
                <Typography
                  variant='h4'
                  sx={{
                    fontSize: '1.5rem',
                    color: '#d4f3d9',
                    fontWeight: 'bold',
                  }}
                >
                  {`0${index + 1}`}
                </Typography>
                <Typography
                  variant='h5'
                  sx={{ fontSize: '1.2rem', color: '#d4f3d9', mt: 1 }}
                >
                  {point.title}
                </Typography>
                <Typography variant='body2' sx={{ color: '#d4f3d9', mt: 2 }}>
                  {point.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </GradientBackground>
  )
}

// Styled wrapper for the section content
const SectionWrapper = styled(Box)({
  padding: '60px 40px',
  backgroundColor: '#1f4238',
  borderRadius: '20px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
  maxWidth: '1000px',
  textAlign: 'center',
})

const points = [
  {
    title: 'Make it',
    description:
      'I sketch wireframes and make prototypes. Talking through tactile designs existing in the browser is worth its weight. Design tools only carry you so far; the rest should be realized with a link my team can rally around.',
  },
  {
    title: 'Collaborate',
    description:
      'Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I aim to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.',
  },
  {
    title: 'Accessible FTW',
    description:
      'I aim to make everything I design accessible to all for one main reason - it’s the right thing to do. Accessible products benefit the many, not the few.',
  },
  {
    title: 'Keep experimenting',
    description:
      'Everything I create is subject to change and experimentation. Not everything will work, but it’s worth trying - and learning from what doesn’t.',
  },
]



export default CollaborateSection
