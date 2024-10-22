import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#546E51',
    },
    secondary: {
      main: '#8fdbc2',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font for body text
    h1: {
      fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', 
    },
    h2: {
      fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', 
    },
    h3: {
      fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', 
    },
    h4: {
      fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', 
    },
    h5: {
      fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', 
    },
    h6: {
      fontFamily: 'Acorn, Mali, Roboto, Arial, sans-serif', 
    },
  },
})

export default theme
