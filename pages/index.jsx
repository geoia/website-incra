import React from 'react';
import Link from 'next/link';
import Entrada from '../components/input';
import BotaoProximo from '../components/botaoProximo';
import BotaoAlternativo from '../components/botaoAlternativo';
import styles from '../styles/inicio.module.css';

export default function Inicio(){

  return(
    <div>      
      <div style={{paddingTop:'7.5%'}} className={styles.centro}>
          <div className={styles.coluna}>
            <div className={styles.linha}>
                  <img src='/imgLogo.png' title='Logo temporário' style={{width:'50%',height:'40%', paddingRight:'20px'}} />
                  <div style={{fontSize:'30px'}}>
                      <h1>WebGis</h1>
                      <h1>GeoIA</h1>
                    </div>
            </div> 
            <div>
                  <p>
                    <Entrada tipo="email" valor="E-mail"/>
                  </p>
                  <p>
                  <Entrada  tipo="password" valor ="Senha"/>
                  </p>
            </div>
              <p style={{float:'right'}}>
                <BotaoProximo  valor ='Login' endereco="/cadastro"/>
                <BotaoAlternativo  valor='Cadastrar-se' endereco='/cadastro'/>
              </p>
          </div>
      </div>
  </div>

  )
}