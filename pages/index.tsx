import React from 'react';
import Head from 'next/head';
import styles from '../styles/inicio.module.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

export default function Inicio() {
  return (
    <>
      <div className={styles.coluna} style={{ paddingTop: '10%' }}>
        <div className={styles.linha}>
          <div className={styles.coluna}>
            <img
              src="/imgLogo.png"
              title="Logo temporário"
              style={{ width: '300px', height: '40%', paddingRight: '20px' }}
            />
          </div>
          <div className={styles.coluna} style={{ fontSize: '30px' }}>
            <h1>
              WebGis<br></br>Geoia
            </h1>
          </div>
        </div>
        <div className={styles.linha}>
          <Input
            size="medium"
            placeholder="E-mail"
            style={{
              backgroundColor: 'white',
              width: '50%',
              height: '40px',
              borderRadius: '10px',
              margin: '10px',
            }}
          />
        </div>
        <div className={styles.linha}>
          <Input
            size="medium"
            placeholder="Senha"
            style={{
              backgroundColor: 'white',
              width: '50%',
              height: '40px',
              borderRadius: '10px',
              margin: '10px',
            }}
          />
        </div>
        <div className={styles.linha} style={{ display: 'block' }}>
          <Button
            variant="contained"
            style={{
              fontWeight: 'bold',
              borderRadius: '10px',
              width: '200px',
              margin: '10px',
              float: 'right',
              marginRight: '25%',
              backgroundColor: '#0f1c3c',
              color: 'white',
              fontSize: '20px',
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            style={{
              fontWeight: 'bold',
              borderRadius: '10px',
              width: '200px',
              margin: '10px',
              float: 'right',
              backgroundColor: '#509CBF',
              color: '#0F1C3C',
              fontSize: '20px',
            }}
          >
            <u>Cadastrar-se</u>
          </Button>
        </div>
      </div>
    </>
  );
}
