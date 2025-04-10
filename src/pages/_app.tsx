// src/pages/_app.tsx
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../theme/Theme'
import '../styles/global.css'
import AppNavBar from '../components/AppNavBar'
import Footer from '../components/Footer'
import FloatingChat from '../components/FloatingChat'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Portfolio Project</title>
      
        <link rel='icon' href='/logo.png' />
      </Head>
      <AppNavBar />
      
      <Component {...pageProps} />
      <Footer />
      <FloatingChat/>
    </ThemeProvider>
  )
}

export default MyApp
