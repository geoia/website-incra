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
    <Grid height={'100vh'}>
      <HeaderInstitucional />
      <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h1">GeoIA</Typography>
        <Typography variant="subtitle1" color={'secondary'}>Universidade Federal de Mato Grosso do Sul</Typography>
        <Typography variant="h3">Lorem ipsum dolor sit amet consectetur</Typography>
        <Typography variant="h2" color={'secondary'}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor</Typography>
        <Typography variant="body1" color={'secondary'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aut repellendus expedita cupiditate dolores at nam ipsam minima in? Eveniet dolorum at quidem quaerat suscipit saepe, sed voluptatibus et earum!</Typography>
      </Grid>
    </Grid>
  );
}
