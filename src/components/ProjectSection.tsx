import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const ProjectSection: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        mb: 12,
        position: 'relative',
        overflow: 'hidden',
        py: 8,
        px: { xs: 2, md: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(public/images/projectbckdrp.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: isMobile ? '70% auto' : '40% auto',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'all 0.4s ease',
        },
        '&:hover::before': {
          opacity: 0.12,
          transform: 'translateY(-10px)',
        },
      }}
    >
      {/* Animated floating dots decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          left: '10%',
          width: 200,
          height: 200,
          background:
            'radial-gradient(circle, rgba(168,230,207,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0px)' },
          },
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant='h3'
          sx={{
            fontWeight: 800,
            mb: 6,
            textAlign: 'center',
            color: '#1a2e19',
            position: 'relative',
            fontSize: { xs: '2rem', md: '2.5rem' },
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
              transition: 'all 0.3s ease',
            },
            '&:hover:after': {
              width: '120px',
              background: 'linear-gradient(90deg, #1e4a1b, #1c3c1a)',
            },
          }}
        >
          Featured Projects
        </Typography>

        {/* View All Projects Button (centered above grid) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#1a2e19',
              color: '#1a2e19',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(26, 46, 25, 0.05)',
                borderColor: '#1e4a1b',
              },
            }}
          >
            View All Projects
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(8px)',
            borderRadius: 4,
            p: { xs: 2, md: 4 },
            boxShadow: '0 8px 32px rgba(26, 46, 25, 0.1)',
            border: '1px solid rgba(220, 237, 193, 0.3)',
          }}
        >
     
        </Box>

        <Divider
          sx={{
            my: 8,
            borderColor: 'rgba(26, 46, 25, 0.1)',
            borderBottomWidth: '2px',
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '40px',
              backgroundImage: 'url(/images/leaf-divider.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default ProjectSection
