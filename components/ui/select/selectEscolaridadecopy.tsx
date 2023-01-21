import React, { Component } from 'react';
import styles from '../../../styles/Select.module.css';

export default function SelectEscolaridade() {
  return (
    <div className={styles.container}>
      <select name="escolaridade" id="" required>
        <option value="" disabled selected>
          Escolaridade
        </option>
        <option value="1">Fundamental Incompleto</option>
        <option value="2">Fundamental Completo</option>
        <option value="3">Ensino Médio Incompleto</option>
        <option value="4">Ensino Médio Completo</option>
        <option value="5">Ensino Superior Incompleto</option>
        <option value="6">Ensino Superior Completo</option>
      </select>
    </div>
  );
}
