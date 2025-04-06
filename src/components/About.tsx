import React from 'react'
import { Box, Typography, Grid, Paper, Fade } from '@mui/material'
import { styled } from '@mui/system'
import GradientBackground from './SharedBackground'

import Diversity3Icon from '@mui/icons-material/Diversity3'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FeedbackIcon from '@mui/icons-material/Feedback'

const icons = [
  <Diversity3Icon />,
  <PsychologyAltIcon />,
  <LightbulbIcon />,
  <FeedbackIcon />,
]

const CollaborateSection = () => {
  return (
    <SectionWrapper>
      <Typography
        variant='h2'
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.2rem' },
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          mb: 2,
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        Let's Connect on Shared Values
      </Typography>

      {/* Section Divider */}
      <Box
        sx={{
          width: '60px',
          height: '4px',
          borderRadius: '3px',
          backgroundColor: 'white',
          margin: '0 auto 40px auto',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      />

      <Typography
        variant='h6'
        sx={{
          color: 'rgba(255,255,255,0.9)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          mb: 6,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          lineHeight: '1.7',
        }}
      >
        I believe in making a positive impact on our world, whether it's through
        sustainability, education, equality, or carbon neutrality. My goal is to
        contribute to these ideals and help create a better future for the next
        generation.
      </Typography>

      <Grid container spacing={4}>
        {points.map((point, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                textAlign: 'left',
                height: '100%',
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                },
              }}
            >
              <Box display='flex' alignItems='center' mb={2}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: '#1f4238',
                    color: '#d4f3d9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    mr: 2,
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
                  }}
                >
                  {icons[index]}
                </Box>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                    color: '#1f4238',
                    fontSize: '1.1rem',
                  }}
                >
                  {point.title}
                </Typography>
              </Box>
              <Typography
                variant='body2'
                sx={{
                  color: '#444',
                  lineHeight: '1.7',
                  fontSize: '0.95rem',
                }}
              >
                {point.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

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
        pt: { xs: '100px', md: '150px' },
        background:
          'linear-gradient(135deg, #0a2e1d 0%, #1f4238 50%, #2c5548 100%)',
      }}
    >
      <ContentWrapper>
        <ProfileImageWrapper>
          <img
            src='/images/1676537092382.jpg'
            alt='Profile'
            className='profile-img'
          />
        </ProfileImageWrapper>

        <TextContent>
          <Fade in timeout={1200}>
            <Box>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  mt: { xs: 4, md: 6 },
                  lineHeight: '1.2',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                I'm Abraham.
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  color: 'rgba(255,255,255,0.9)',
                  mt: 2,
                  lineHeight: '1.4',
                }}
              >
                Frontend Developer based in Istanbul, Türkiye
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  mt: 4,
                  maxWidth: '600px',
                  textAlign: { xs: 'center', md: 'left' },
                  lineHeight: '1.7',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                I'm a Frontend Developer passionate about turning ideas into
                responsive, user-friendly web apps. I've built features for both
                mobile and desktop using modern technologies like React,
                TypeScript, and Tailwind CSS. Experienced with Git, Agile
                workflows, and design tools, I'm always learning and love
                contributing to open source.
              </Typography>
            </Box>
          </Fade>
        </TextContent>
      </ContentWrapper>

      <Box
        sx={{
          marginTop: { xs: '80px', md: '120px' },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
        }}
      >
        <CollaborateSection />
      </Box>
    </GradientBackground>
  )
}

// Points Data
const points = [
  {
    title: 'Collaborate',
    description:
      'Design thrives in a collaborative environment. I believe that working closely with my team leads to better outcomes. By fostering open communication and encouraging feedback, I aim to contribute to a space where ideas can be shared and designs can evolve through teamwork.',
  },
  {
    title: 'Learn Continuously',
    description:
      'As a new developer, I recognize the importance of continuous learning in the ever-evolving tech landscape. I actively seek out opportunities to expand my knowledge, whether through online courses, reading documentation, or participating in coding communities.',
  },
  {
    title: 'Keep Experimenting',
    description:
      'By actively listening to my teammates and considering their viewpoints, I can learn and grow, leading to designs that better meet user needs. This experimental mindset not only helps me improve my work but also encourages collaboration and creativity within the team.',
  },
  {
    title: 'Embrace Feedback',
    description:
      'I understand that feedback is a crucial part of growth. I approach critiques with an open mind and view them as opportunities to improve my work. By welcoming constructive criticism, I aim to enhance my coding practices and design decisions.',
  },
]

// Styled Components
const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(31, 66, 56, 0.8)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  maxWidth: '1000px',
  margin: '0 auto',
  textAlign: 'center',
  marginBottom: '50px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  width: '100%',
  padding: '0 20px',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

const ProfileImageWrapper = styled(Box)(({ theme }) => ({
  '& img': {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
    border: '4px solid rgba(255, 255, 255, 0.1)',
    [theme.breakpoints.up('sm')]: {
      width: '320px',
      height: '320px',
    },
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
    },
  },
}))

const TextContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginLeft: theme.spacing(5),
    marginTop: 0,
    maxWidth: '600px',
  },
}))

export default About
