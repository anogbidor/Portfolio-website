import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface HeroSectionProps {
  isMobile: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '80vh',
        backgroundColor: '#1a2e19',
        color: '#f0f7f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
        position: 'relative',
        pt: '80px',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(
              circle at center,
              #1e4a1b 0%,
              #1c3c1a 30%,
              #1a2e19 70%
            )`,
          zIndex: 0,
        },
      }}
    >
      {/* Moving radial light */}
      <Box
        sx={{
          position: 'absolute',
          width: '150vw',
          height: '150vw',
          background:
            'radial-gradient(circle, rgba(168,230,207,0.2) 0%, transparent 70%)',
          zIndex: 1,
          animation: 'orbit 20s linear infinite',
          '@keyframes orbit': {
            '0%': { transform: 'translate(-25%, -25%)' },
            '25%': { transform: 'translate(25%, -25%)' },
            '50%': { transform: 'translate(25%, 25%)' },
            '75%': { transform: 'translate(-25%, 25%)' },
            '100%': { transform: 'translate(-25%, -25%)' },
          },
        }}
      />

      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          py: 6,
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            fontWeight: 800,
            fontSize: isMobile ? '2.8rem' : '5rem',
            lineHeight: 1.1,
            mb: 2,
            mt: { xs: 2, md: 4 },
            background: 'linear-gradient(90deg, #a8e6cf, #dcedc1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            letterSpacing: '-0.05em',
          }}
        >
          Hi, I'm Abraham
        </Typography>

        <Typography
          variant='h2'
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? '2rem' : '3.5rem',
            mb: 4,
            color: '#d4f3d9',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #a8e6cf, #dcedc1)',
              borderRadius: '2px',
            },
          }}
        >
          A Full Stack Developer
        </Typography>

        <Typography
          variant='subtitle1'
          sx={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#e0f2e9',
            mb: 6,
            maxWidth: '800px',
            lineHeight: 1.6,
            px: 2,
          }}
        >
          I specialize in crafting beautiful, accessible, and performant digital
          experiences.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 8 }}>
          <Button
            variant='contained'
            size='large'
            sx={{
              background: 'linear-gradient(90deg, #a8e6cf, #dcedc1)',
              color: '#1a2e19',
              fontWeight: 600,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              },
            }}
          >
            View My Work
          </Button>
          <Button
            variant='outlined'
            size='large'
            sx={{
              color: '#dcedc1',
              borderColor: '#dcedc1',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(220, 237, 193, 0.1)',
                borderColor: '#dcedc1',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <LinkedIn
            sx={{ fontSize: 32, color: '#dcedc1', cursor: 'pointer' }}
          />
          <GitHub sx={{ fontSize: 32, color: '#dcedc1', cursor: 'pointer' }} />
          <Email sx={{ fontSize: 32, color: '#dcedc1', cursor: 'pointer' }} />
        </Box>
      </Box>

      {/* Additional decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          background:
            'radial-gradient(circle at 70% 30%, rgba(220,237,193,0.05) 0%, transparent 50%)',
          zIndex: 1,
          animation: 'pulse 15s ease infinite alternate',
          '@keyframes pulse': {
            '0%': { opacity: 0.3 },
            '50%': { opacity: 0.1 },
            '100%': { opacity: 0.3 },
          },
        }}
      />
    </Box>
  )
}

export default HeroSection
