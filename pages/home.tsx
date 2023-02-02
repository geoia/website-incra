import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeaderInstitucional from '../components/ui/header/Header';
import homeTucano from '../images/home-tucano.png';
import { Box, Button, Grid, Typography } from '@mui/material';
import NextLink from 'next/link';
import logoGeoIA from '../public/logo.ico';
import sobreAnimais from '../images/sobre-animais.png';

export default function Home() {
  return (
    <Grid container sx={{ flexDirection: 'column', height: '100vh' }}>
      <HeaderInstitucional />
      <Grid
        item
        sx={{
          maxWidth: 900,
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 6,
          marginTop: 8,
        }}
      >
        <Grid item>
          <Typography variant="h1" sx={{ fontWeight: 600, color: 'white' }}>
            GeoIA
          </Typography>
          <Typography variant="subtitle1" fontWeight={500}>
            Universidade Federal de Mato Grosso do Sul
          </Typography>
        </Grid>
        <Typography variant="h4" color={'white'} fontWeight={500}>
          <em>Lorem ipsum dolor sit amet consectetur</em>
        </Typography>
        <Typography variant="h3" color={'secondary'} fontWeight={500}>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
        </Typography>
        <Typography variant="body1" color={'secondary'} maxWidth={600}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aut repellendus expedita
          cupiditate dolores at nam ipsam minima in? Eveniet dolorum at quidem quaerat suscipit
          saepe, sed voluptatibus et earum!
        </Typography>
      </Grid>
    </Grid>
  );
}
