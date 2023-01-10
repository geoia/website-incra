import Botao from '../components/principal/botoes';
import Head from 'next/head';
import styles from '../styles/Principal.module.css';
import Mapa from './Mapa';

import React from 'react';
import dynamic from 'next/dynamic';

import Search from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Principal() {
  return (
    <>
      <Head>
        <title>GeoIA - Principal</title>
        <style>
          {`
            body {            
                width: 100vw;
                height: 100vh;
                position: relative;
            }
            #__next{
                width: 100%;
                height: 100%;
            }
          `}
        </style>
      </Head>

      <Mapa />

      <Grid
        sx={{
          position: 'absolute',
          top: 0,
          margin: '1rem',
          display: 'flex',
          alignItems: 'center',
          width: '40%',
          height: '40px',
          background: '#509CBF',
          borderRadius: '0 20px 20px 0px',
        }}
      >
        <Grid
          sx={{
            width: '20%',
            height: '100%',
            background: 'white',
          }}
        />
        <TextField
          variant="standard"
          size="small"
          placeholder="Pesquise um endereço"
          InputProps={{ disableUnderline: true }}
          sx={{
            width: '72%',
            marginLeft: '5px',
            input: {
              color: 'white',
              fontWeight: 400,
              '&::placeholder': {
                opacity: 1
              },
            },
          }}
        />
        <Search fontSize="large" sx={{ color: 'white' }} />
      </Grid>

      <Grid 
        sx={{
          position: 'absolute',
          width: '40px',
          height: '180px',
          top: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Botao button="Menu" />
        <Botao button="Calendar" />
        <Botao button="Download" />
        <Botao button="Upload" />
      </Grid>
      <Grid 
          sx={{
            position: 'absolute',
            width: '40px',
            height: '180px',
            top: '50%',
            right: 0,
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: 'translateY(-50%)'
          }}
      >
        <Botao button="Fire" />
        <Botao button="Forest" />
        <Botao button="Road" />
        <Botao button="Water" />
      </Grid>
      <Grid
        sx={{
          position: 'absolute',
          width: '180px',
          height: '40px',
          bottom: 0,
          right: 0,
          margin: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Botao button="Add" />
        <Botao button="Remove" />
        <Botao button="Crop" />
        <Botao button="Map" />
      </Grid>
    </>
  );
}
