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
