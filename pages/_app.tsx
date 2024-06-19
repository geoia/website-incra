import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { GoogleAnalytics } from '@next/third-parties/google';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
        <title>EcoGis</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG || ''} />
    </>
  );
}

export default MyApp;
