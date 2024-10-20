// src/pages/_app.tsx
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'; 
import theme from '../theme/Theme' 
import '../styles/global.css'
import AppNavBar from '../components/AppNavBar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
   <ThemeProvider theme={theme}>
    <AppNavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
