import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Paper, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import AiFormLayout from './AiFormLayout'

// Custom Card Styles
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2, // Softer rounded corners
  color: theme.palette.text.primary,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for cards
  position: 'relative', // To allow expand functionality
  overflow: 'hidden', // Hide the overflowing content
  transition: 'height 0.3s ease-in-out', // Smooth transition for expand
  cursor: 'pointer', // Pointer cursor for better UX indicating it's clickable
}))

const Cards: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  // Toggle expand state
  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <Box sx={{ flexGrow: 1, padding: (theme) => theme.spacing(4) }}>
      <Grid container spacing={4}>
        {/* First Card */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Item
            sx={{
              backgroundColor: '#E0BBE4',
              height: expanded ? 'auto' : '350px', // Fixed height when not expanded
            }}
            onClick={toggleExpand} // Card is now clickable
          >
            <Typography variant='h6' component='div'>
              AI
            </Typography>
            {/* Partially hidden AiFormLayout */}
            <AiFormLayout />
          </Item>
        </Grid>

        {/* Second Card */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Item sx={{ backgroundColor: '#A0E7E5' }}>
            <Typography variant='h6' component='div'>
              Articles
            </Typography>
          </Item>
        </Grid>

        {/* Third Card */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Item sx={{ backgroundColor: '#FDE2E4' }}>
            <Typography variant='h6' component='div'>
              Plugins
            </Typography>
          </Item>
        </Grid>

        {/* Fourth Card */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <Item sx={{ backgroundColor: '#B4F8C8' }}>
            <Typography variant='h6' component='div'>
              Mobile
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cards
