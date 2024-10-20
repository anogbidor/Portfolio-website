import * as React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/system'
import Articles from './Articles'

// Styled component for the cards
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius * 2,
}))

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={4}>
        {/* Top row */}
        <Grid item xs={12} sm={6}>
          <Item sx={{ height: '300px', backgroundColor: '#a3dbd4' }}>
       <Typography variant='h6'>Translator app</Typography>
       
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item sx={{ height: '150px', backgroundColor: '#b3c7f1' }}>
            <Typography variant='h6'>Rectangle-like Card</Typography>
          </Item>
        </Grid>
        {/* Bottom row */}
        <Grid item xs={12} sm={6}>
          <Item sx={{ height: '150px', backgroundColor: '#f1b3c7' }}>
            <Typography variant='h6'>Rectangle-like Card</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item sx={{ height: '300px', backgroundColor: '#dbd4a3' }}>
            <Typography variant='h6'>Square-like Card</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout
