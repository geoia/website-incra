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
          margin: '1%',
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
          sx={{
            width: '72%',
            marginLeft: '5px',
            border: 0,
            input: {
              color: 'white',
              '&::placeholder': {
                opacity: 1
              },
            },
          }}
        />
        <Search fontSize="large" sx={{ color: 'white' }} />
      </Grid>

      <div className={styles.botoes1}>
        <Botao button="Menu" />
        <Botao button="Calendar" />
        <Botao button="Download" />
        <Botao button="Upload" />
      </div>
      <div className={styles.botoes2}>
        <Botao button="Fire" />
        <Botao button="Forest" />
        <Botao button="Road" />
        <Botao button="Water" />
      </div>
      <div className={styles.botoes3}>
        <Botao button="Add" />
        <Botao button="Remove" />
        <Botao button="Crop" />
        <Botao button="Map" />
      </div>
    </>
  );
}
