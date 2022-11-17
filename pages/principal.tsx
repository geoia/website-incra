import Botao from '../components/principal/botoes';
import Head from 'next/head';
import styles from '../styles/Principal.module.css';
import Mapa from './Mapa';

import React from 'react';
import dynamic from 'next/dynamic';

import Search from '@mui/icons-material/Search';

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

      <div className={styles.pesquisa}>
        <div className={styles.logo}></div>
        <input type="text" className={styles.searchInput} placeholder="Pesquise um endereço" />
        <Search fontSize="large" sx={{ color: 'white' }} />
      </div>
      <div className={styles.botoes1}>
        <Botao icon="Menu" />
        <Botao icon="Calendar" />
        <Botao icon="Download" />
        <Botao icon="Upload" />
      </div>
      <div className={styles.botoes2}>
        <Botao icon="Fire" />
        <Botao icon="Forest" />
        <Botao icon="Road" />
        <Botao icon="Water" />
      </div>
      <div className={styles.botoes3}>
        <Botao icon="Add" />
        <Botao icon="Remove" />
        <Botao icon="Crop" />
        <Botao icon="Map" />
      </div>
    </>
  );
}
