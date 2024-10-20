import * as React from 'react'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'

const Articles: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        maxHeight: 400,
        padding: 1,
        margin: '10px auto',
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ paddingBottom: 1 }}>
        <CardMedia
          component='img'
          height='140'
          image='/images/Langify.png'
          alt='project image'
        />
      </CardContent>
      <CardActions sx={{ padding: 1 }}> 
        <Button size='small'>Live view</Button>
      </CardActions>
    </Card>
  )
}

export default Articles
