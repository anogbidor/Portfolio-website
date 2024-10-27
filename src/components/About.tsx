import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import CollaborateSection from './CollaborateSection'
import GradientBackground from './SharedBackground'

const About = () => {
  return (
    <Box>
      <GradientBackground
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
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

          {/* Text content */}
          <TextContent>
            <Typography
              variant='h1'
              sx={{ fontSize: '4rem', fontWeight: 'bold', color: '#d4f3d9' }}
            >
              I'm Abraham.
            </Typography>
            <Typography
              variant='h4'
              sx={{ fontSize: '1.5rem', color: '#d4f3d9', mt: 2 }}
            >
              I'm a Frontend Developer working in Istanbul, Türkiye.
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: '#d4f3d9',
                mt: 4,
                maxWidth: '600px',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Over the past 2 years,i have developed responsive and interactive
              web applications using HTML, CSS, Bootstrap, Tailwind, Material UI
              (MUI) and JavaScript frameworks and libraries like React, Redux
              (Redux Toolkit) to develop features for both mobile and desktop
              platforms. I’m proud to have won a few hats
            </Typography>
          </TextContent>
        </ContentWrapper>
      </GradientBackground>
      <CollaborateSection />
    </Box>
  )
}

//  hero section content
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
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
})

// Styled  text content
const TextContent = styled(Box)(({ theme }) => ({
  textAlign: 'center', 
  marginLeft: '20px', //  margin between the image and text
  [theme.breakpoints.up('md')]: {
    textAlign: 'left', // For medium and larger screens
    maxWidth: '600px', // Max width for the text content
  },
}))

export default About
