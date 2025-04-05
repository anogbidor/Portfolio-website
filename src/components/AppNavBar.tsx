import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const AppNavBar: React.FC = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuAnchor, setMobileMenuAnchor] =
    React.useState<null | HTMLElement>(null)

  const handleScroll = () => {
    setScrolled(window.scrollY > 10)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null)
  }

  const navItems = [
    { name: 'Home', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.16)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth='lg' sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
          }}
        >
          {/* Logo */}
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: '-0.5px',
              color: '#ffffff',
            }}
          >
            Logox
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} passHref>
                <Button
                  disableRipple
                  sx={{
                    color: '#ffffff',
                    fontWeight: router.pathname === item.path ? 600 : 400,
                    fontSize: '1rem',
                    textTransform: 'none',
                    position: 'relative',
                    px: 0,
                    minWidth: 0,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: router.pathname === item.path ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: '#ffffff',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover:after': {
                      width: '100%',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='mobile-menu'
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Mobile Breadcrumb (visible when scrolled) */}
        {scrolled && (
          <Box sx={{ display: { xs: 'block', md: 'none' }, pb: 1 }}>
            <Breadcrumbs
              aria-label='breadcrumb'
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              <Typography fontSize='0.8rem'>
                {navItems.find((item) => router.pathname.startsWith(item.path))
                  ?.name || 'Home'}
              </Typography>
            </Breadcrumbs>
          </Box>
        )}
      </Container>

      {/* Mobile Menu */}
      <Menu
        id='mobile-menu'
        anchorEl={mobileMenuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={handleMobileMenuClose}
            selected={router.pathname === item.path}
            component={Link}
            href={item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  )
}

export default AppNavBar
