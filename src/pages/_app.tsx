// src/pages/_app.tsx
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../theme/Theme'
import '../styles/global.css'
import AppNavBar from '../components/AppNavBar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Keep Experimenting</title>
      
        <link rel='icon' href='/logo.png' />
      </Head>
      <AppNavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
