import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppNavBar from '../components/AppNavBar'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const LandingPage: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <AppNavBar />
      <HeroSection isMobile={isMobile} />

      <Box sx={{ backgroundColor: '#ffffff', pt: 8, pb: 12 }}>
        <Container maxWidth='lg'>
          <ProjectSection />
          <SkillSection />
          <AboutSection />
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default LandingPage
