import Botao from '../components/principal/botoes';
import Head from 'next/head';
import styles from '../styles/Principal.module.css';

import React from 'react';
import dynamic from 'next/dynamic';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Principal() {
  const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
  });
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
      <div id="map" style={{ width: '100%', height: '100%', position: 'relative', zIndex: '0' }}>
        <MapWithNoSSR />
      </div>

      <div className={styles.pesquisa}>
        <div className={styles.logo}></div>
        <input type="text" className={styles.searchInput} placeholder="Pesquise um endereço" />
        <img src="./searchIcon.png" alt="icone de pesquisa" width="5%" />
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
