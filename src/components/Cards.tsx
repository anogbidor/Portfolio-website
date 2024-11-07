import * as React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Grid,
  Paper,
} from '@mui/material'
import { styled } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub' // Import GitHub Icon

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Layout: React.FC = () => {
  const cardsData = [
    {
      image: '/images/langify.png',
      title: 'Langify',
      backgroundColor: '#a3dbd4',
      githubUrl: 'https://github.com/your-repo', // Replace with your GitHub URL
      mediumUrl: 'https://medium.com/@your-profile', // Replace with your Medium URL
    },
    {
      image: '/images/projectListing.png',
      title: 'Sample Title 2',
      backgroundColor: '#b3c7f1',
      githubUrl: 'https://github.com/anogbidor/Product-listing-page', // Replace with your GitHub URL
      mediumUrl: 'https://medium.com/@your-profile', // Replace with your Medium URL
    },
    {
      image: '/images/digitalFrame-project.png',
      title: 'Rectangle-like Card',
      backgroundColor: '#dbd4a3',
      githubUrl: 'https://github.com/your-repo', // Replace with your GitHub URL
      mediumUrl: 'https://medium.com/@your-profile', // Replace with your Medium URL
    },
    {
      image: '/images/Task Manager.png',
      title: 'Rectangle-like Card',
      backgroundColor: '#ffff',
      githubUrl: 'https://github.com/your-repo', // Replace with your GitHub URL
      mediumUrl: 'https://medium.com/@your-profile', // Replace with your Medium URL
    },
    {
      image: '/images/GitHub-user-project.png',
      title: 'Rectangle-like Card',
      backgroundColor: '#d094e5',
      githubUrl: 'https://github.com/your-repo', // Replace with your GitHub URL
      mediumUrl: 'https://medium.com/@your-profile', // Replace with your Medium URL
    },
    {
      image: '/images/pokemonLibrary.png',
      title: 'Rectangle-like Card',
      backgroundColor: '#e7b89c',
      githubUrl: 'https://github.com/your-repo', // Replace with your GitHub URL
      mediumUrl: 'https://medium.com/@your-profile', // Replace with your Medium URL
    },
  ]

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={4}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            
            <Item sx={{ backgroundColor: card.backgroundColor }}>
              <Card
                sx={{
                  width: '100%',
                  backgroundColor: card.backgroundColor,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component='img'
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  image={card.image}
                  title={card.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/default-image.png' // Fallback image
                  }}
                />
              
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <IconButton
                    size='small'
                    sx={{ color: 'black' }}
                    onClick={() => window.open(card.githubUrl, '_blank')}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    size='small'
                    sx={{ color: 'primary.main' }}
                    onClick={() => window.open(card.mediumUrl, '_blank')}
                  >
                    <img
                      src='/images/medium.png' 
                      alt='Medium Logo'
                      style={{ width: '24px', height: 'auto' }} 
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Layout
