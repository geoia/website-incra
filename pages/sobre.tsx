import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';

import HeaderInstitucional from '../components/ui/header/Header';
import sobreAnimais from '../images/sobre-animais.png';

export default function Sobre() {
  return (
    <>
      <HeaderInstitucional />
      <Grid container sx={{ height: '100vh', backgroundColor: '#0F1C3C' }}>
        <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={sobreAnimais} alt="Imagens do pantanal" width={400} height={480} />
        </Grid>
        <Grid item lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <Typography variant="h3">Sobre o projeto</Typography>
            <Typography variant="h4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde porro deleniti,
              qui dolore officiis omnis rem necessitatibus maiores doloremque non repudiandae,
              mollitia aperiam quas fugit fuga vel eveniet numquam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere voluptas, tempora nulla quod provident quasi
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={sobreAnimais} alt="Imagens do pantanal" width={400} height={480} />
        </Grid>
        <Grid item lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" component={'h2'} sx={{ fontWeight: 600, color: '#0F1C3C' }}>
              GeoIA
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 17, color: '#0F1C3C' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde porro deleniti,
              qui dolore officiis omnis rem necessitatibus maiores doloremque non repudiandae,
              mollitia aperiam quas fugit fuga vel eveniet numquam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere voluptas, tempora nulla quod provident quasi

            </Typography>
            <Typography
              variant="h4"
              component={'h2'}
              sx={{ marginTop: 5, fontWeight: 600, color: '#0F1C3C' }}
            >
              UFMS
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: 17, color: '#0F1C3C' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde porro deleniti,
              qui dolore officiis omnis rem necessitatibus maiores doloremque non repudiandae,
              mollitia aperiam quas fugit fuga vel eveniet numquam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere voluptas, tempora nulla quod provident quasi
              maiores adipisci nostrum dolorum esse mollitia at, est eveniet ex id eligendi

            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
