import React from 'react';
import styles from '../../../styles/Cadastro.module.css';

interface Props {
  tipo: string;
  placeholder: string;
}

export default function Input(props: Props) {
  return (
    <div className={styles.divInput}>
      <input type={props.tipo} placeholder={props.placeholder} required />
    </div>
  );
}
