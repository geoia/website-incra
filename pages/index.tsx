import React from 'react';
import Head from 'next/head';
import styles from '../styles/inicio.module.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

export default function Inicio() {
  return (
    <div className={styles.colunaCentral}>
      <Head>
        <title>GeoIA - Login</title>
        <style>
          {`
            #__next {
              background: #509cbf 
            }
          `}
        </style>
      </Head>
      <div className={styles.coluna} style={{ paddingTop: '18vh' }}>
        <div className={styles.linha}>
          <div className={styles.coluna}>
            <img src="/imgLogo.png" title="Logo temporário" className={styles.logo} />
          </div>
          <div className={styles.coluna} style={{ fontSize: '30px' }}>
            <h1>
              WebGis<br></br>&#160; Geoia
            </h1>
          </div>
        </div>
        <div className={styles.linha}>
          <Input size="medium" placeholder="E-mail" className={styles.entrada} />
        </div>
        <div className={styles.linha}>
          <Input size="medium" placeholder="Senha" className={styles.entrada} />
        </div>
        <div className={styles.linhaBotoes}>
          <Button
            href="/principal"
            variant="contained"
            disableRipple
            sx={{
              ml: 1,
              '&.MuiButtonBase-root:hover': {
                bgcolor: '#1f2c4c',
                textDecoration: 'underline',
              },
            }}
            style={{
              width: '25vh',
              height: '50px',
              backgroundColor: '#0f1c3c',
              color: 'white',
              borderRadius: '15px',
              border: 'none',
              margin: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              float: 'right',
            }}
          >
            Login
          </Button>
          <Button
            href="/cadastro"
            variant="contained"
            disableRipple
            sx={{
              ml: 1,
              '&.MuiButtonBase-root:hover': {
                bgcolor: '#60aCcF',
                textDecoration: 'underline',
              },
            }}
            style={{
              width: '25vh',
              height: '50px',
              backgroundColor: '#509cbf',
              color: '#0f1c3c',
              borderRadius: '10px',
              border: 'none',
              margin: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              float: 'right',
            }}
          >
            Cadastro
          </Button>
        </div>
      </div>
    </div>
  );
}
