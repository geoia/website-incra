import DivLogoeNome from '../components/ui/divLogo/divLogoeTitulo';
import Input from '../components/ui/divInput/input';
import styles from '../styles/Cadastro.module.css';

import Head from 'next/head';
import Link from 'next/link';

export default function Cadastro() {
  return (
    <>
      <Head>
        <title>GeoIA - Cadastro</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.divInicial}>
          <DivLogoeNome />
          <div className={styles.divInfoPessoais}>
            <p>Informações Pessoais</p>
            <Input placeholder="Nome" tipo="text" />
            <Input placeholder="Email" tipo="email" />
            <Input placeholder="Escolaridade" tipo="text" />
            <Input placeholder="Senha" tipo="password" />
            <Input placeholder="Confirmar Senha" tipo="password" />
          </div>
        </div>
        <div className={styles.divLocalizao}>
          <p className={styles.text}>Localização</p>
          <Input placeholder="Estado" tipo="text" />
          <Input placeholder="Cidade" tipo="text" />
          <div className={styles.divCheckbox}>
            <input type="checkbox" name="Termos" />
            <label htmlFor="Termos">
              Eu li e aceito os termos de contrado e permito o uso dos dados
            </label>
          </div>
          <button className={styles.button} type="submit">
            <Link href="../">
              <a style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 'bold' }}>
                Cadastrar
              </a>
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
