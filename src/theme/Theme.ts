import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#546E51', // Define primary color
    },
    secondary: {
      main: '#8fdbc2', // Define secondary color
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', // Include more fonts
  },
})

export default theme
