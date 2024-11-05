import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'
import GradientBackground from './SharedBackground'

// CollaborateSection without GradientBackground wrapper
const CollaborateSection = () => {
  return (
    <SectionWrapper>
      <Typography
        variant='h2'
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f4238',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Let’s Connect on Shared Values.
      </Typography>
      <Typography
        variant='h6'
        sx={{
          color: '#1f4238',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          mb: 6,
        }}
      >
        I believe in making a positive impact on our world, whether it’s through
        sustainability, education, equality, or carbon neutrality. My goal is to
        contribute to these ideals and help create a better future for the next
        generation. If you share these values, I’d love to chat and explore how
        we can work together!
      </Typography>

      <Grid container spacing={4}>
        {points.map((point, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box>
              <Typography
                variant='h4'
                sx={{
                  fontSize: '1.5rem',
                  color: '#1f4238',
                  fontWeight: 'bold',
                }}
              >
                {`0${index + 1}`}
              </Typography>
              <Typography
                variant='h4'
                sx={{ fontSize: '1.2rem', color: '#1f4238', mt: 1 }}
              >
                {point.title}
              </Typography>
              <Typography variant='body1' sx={{ color: '#1f4238', mt: 2 }}>
                {point.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

// Main About component that includes CollaborateSection
const About = () => {
  return (
    <GradientBackground
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        padding: '0 20px',
        pt: '150px', 
      }}
    >
      {/* About Section Content */}
      <ContentWrapper>
        <ProfileImageWrapper>
          <img
            src='/images/1676537092382.jpg'
            alt='Profile'
            className='profile-img'
          />
        </ProfileImageWrapper>

        {/* Text content */}
        <TextContent>
          <Typography
            variant='h1'
            sx={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#d4f3d9',
              mt: 6,
            }} 
          >
            I'm Abraham.
          </Typography>
          <Typography
            variant='h4'
            sx={{ fontSize: '2rem', color: '#d4f3d9', mt: 2 }}
          >
            I'm a Frontend Developer working in Istanbul, Türkiye.
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: '#d4f3d9',
              mt: 4,
              maxWidth: '600px',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Over the past 2 years, I have developed responsive and interactive
            web applications using HTML, CSS, Bootstrap, Tailwind, Material UI
            (MUI) and JavaScript frameworks and libraries like React, Redux
            (Redux Toolkit) to develop features for both mobile and desktop
            platforms. I’m proud to have won a few hats.
          </Typography>
        </TextContent>
      </ContentWrapper>

      
      <Box
        sx={{
          marginTop: '120px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CollaborateSection />
      </Box>
    </GradientBackground>
  )
}

// Styled wrapper for the Collaborate Section content
const SectionWrapper = styled(Box)({
  padding: '60px 40px',
  backgroundColor: '#d4f3d9',
  borderRadius: '20px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
  maxWidth: '1000px',
  margin: '0 auto', 
  textAlign: 'center',
  marginBottom: '50px',
})


const points = [
  {
    title: 'Collaborate',
    description:
      'Design thrives in a collaborative environment. I believe that working closely with my team leads to better outcomes. By fostering open communication and encouraging feedback, I aim to contribute to a space where ideas can be shared and designs can evolve through teamwork.',
  },

  {
    title: 'Learn Continuosly',
    description:
      'As a new developer, I recognize the importance of continuous learning in the ever-evolving tech landscape. I actively seek out opportunities to expand my knowledge, whether through online courses, reading documentation, or participating in coding communities. This commitment helps me stay updated with industry trends and improves my skills.',
  },

  {
    title: 'Keep experimenting',
    description:
      'By actively listening to my teammates and considering their viewpoints, I can learn and grow, leading to designs that better meet user needs. This experimental mindset not only helps me improve my work but also encourages collaboration and creativity within the team. I’m eager to explore new ideas together and see how they can shape our projects for the better.',
  },

  {
    title: 'Embrace Feedback',
    description:
      'I understand that feedback is a crucial part of growth. I approach critiques with an open mind and view them as opportunities to improve my work. By welcoming constructive criticism, I aim to enhance my coding practices and design decisions, ensuring that I contribute positively to my team’s success',
  },
]

// Styled content for the About section
const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  width: '100%',
  padding: '0 20px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

// Styled profile image
const ProfileImageWrapper = styled(Box)({
  '& img': {
    width: '400px', 
    height: '400px', 
    borderRadius: '10%', 
    objectFit: 'cover',
  },
})

// Styled text content
const TextContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginLeft: '20px',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    maxWidth: '600px',
  },
}))

export default About
