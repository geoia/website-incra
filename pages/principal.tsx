import Botao from '../components/principal/botoes';
import Head from 'next/head';
import styles from '../styles/Principal.module.css';

export default function Principal() {
  return (
    <>
      <Head>
        <title>GeoIA - Cadastro</title>
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
      <div className={styles.mapa}></div>
      <div className={styles.pesquisa}>
        <div className={styles.logo}></div>
        <input type="text" className={styles.searchInput} placeholder="Pesquise um endereço" />
        <img src="./searchIcon.png" alt="icone de pesquisa" width="5%" />
      </div>
      <div className={styles.botoes1}>
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
      </div>
      <div className={styles.botoes2}>
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
      </div>
      <div className={styles.botoes3}>
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
        <Botao srcImg="/imgLogo.png" />
      </div>
    </>
  );
}
