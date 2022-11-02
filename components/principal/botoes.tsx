import React from 'react';
import styles from '../../styles/Principal.module.css';

interface Props {
  srcImg: string;
}

export default function Botao(props: Props) {
  return (
    <button className={styles.botao} type="button">
      <img src={props.srcImg} alt="botao com ícone" />
    </button>
  );
}
