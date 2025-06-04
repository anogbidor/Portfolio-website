// src/pages/_app.tsx
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../theme/Theme'
import '../styles/global.css'
import AppNavBar from '../navbar/AppNavBar'
import Footer from '../footer/Footer'
import FloatingChat from '../components/chatBot/FloatingChat'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Portfolio Project</title>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='Portfolio' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <AppNavBar />

      <Component {...pageProps} />
      <Footer />
      <FloatingChat />
    </ThemeProvider>
  )
}

export default MyApp
