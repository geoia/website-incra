import DivLogo from '../components/cadastro/divInfoPessoais/divInicial';
import DivLocalizacao from '../components/cadastro/divLocalizacao/divLocalizacao';
import styles from '../styles/Cadastro.module.css';

import Head from 'next/head';

export default function Cadastro() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
        <title>GeoIA</title>
        <link rel="icon" href="/imgLogo.png" />
      </Head>
      <section className={styles.section}>
        <DivLogo />
        <DivLocalizacao />
      </section>
    </>
  );
}
