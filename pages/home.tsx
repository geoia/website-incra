import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeaderInstitucional from '../components/ui/header/header';
import homeTucano from '../images/home-tucano.png';
import { Box, Button, Grid, Typography } from '@mui/material';
import NextLink from 'next/link';
import logoGeoIA from '../public/logo.ico';
import sobreAnimais from '../images/sobre-animais.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GeoIa WebGis</title>
      </Head>

      <HeaderInstitucional />

      <Box
        sx={{
          height: 700,
          margin: '2em 0',
          paddingRight: '40em',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Image className={styles.tucano} src={homeTucano} alt="homeTucano" />
          </Grid>
          <Grid item>
            <h1 className={styles.title}>GeoIA</h1>
            <h3 className={styles.description}>Universidade Federal de Mato Grosso do Sul</h3>
            <Typography variant="h4" sx={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: 700,
          margin: '2em 0',
          paddingRight: '40em',
          backgroundColor: '#0F1C3C',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Image className={styles.tucano} src={sobreAnimais} alt="sobreAnimais" />
          </Grid>
          <Grid item>
            <h1 className={styles.title}>Sobre o projeto</h1>
            <h3 className={styles.description}>Lorem ipsum dolor sit amet, consectetur.</h3>
            <Typography variant="h4" sx={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: 700,
          margin: '2em 0',
          paddingRight: '40em',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Image className={styles.tucano} src={homeTucano} alt="homeTucano" />
          </Grid>
          <Grid item>
            <h3 className={styles.description}>GeoIA</h3>
            <h3 className={styles.description}>UFMS</h3>
            <Typography variant="h4" sx={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur.
            </Typography>
            <p className={styles.description}>
              Get started by editing <code className={styles.code}>pages/index.tsx</code>
            </p>
            <div className={styles.grid}>
              <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: '#0F1C3C',
          height: 700,
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Image className={styles.tucano} src={homeTucano} alt="homeTucano" />
          </Grid>
          <Grid item>
            <h1 className={styles.title}>Webgis</h1>
            <Typography variant="h4" sx={{ color: 'white' }}>
              Lorem ipsum dolor sit amet, consectetur.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderRadius: '100px',
            width: '320px',
            height: '120px',
            backgroundColor: '#509cbf',
          }}
        >
          <NextLink href="/webgis" passHref>
            <Button
              href="/webgis"
              sx={{
                borderRadius: '100px',
                width: '300px',
                height: '100px',
                backgroundColor: 'white',
                fontSize: '40px',
                fontFamily: 'Josefin Sans',
                fontWeight: 'Bold',
                color: '#0f1c3c',
                margin: '10px',
              }}
            >
              WebGis
            </Button>
          </NextLink>
        </Box>
      </Box>

      <footer className={styles.footer}>
        <a href="https://www.ufms.br/" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/ufms.png" alt="Vercel Logo" width={200} height={100} />
          </span>
        </a>
      </footer>
    </div>
  );
}
