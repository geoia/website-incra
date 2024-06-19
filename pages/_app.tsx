import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EcoGis - Mapeando a biodiversidade do Pantanal</title>

        <meta property="og:title" content="EcoGis - Mapeando a biodiversidade do Pantanal" />
        <meta
          property="og:description"
          content="Projeto de pesquisa e extensão do laboratório Geomática e Inteligência Artificial em parceria com o Laboratório de Engenharia de Software, da Universidade Federal de Mato Grosso do Sul, para monitoramento e gestão dos biomas do Brasil, principalmente do pantanal, por meio da ferramenta WebGis"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EcoGis" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="/images/screenshot.png" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:url"
          content={`https://${process.env.NODE_ENV === 'development' ? 'dev.' : ''}ecogis.app`}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
