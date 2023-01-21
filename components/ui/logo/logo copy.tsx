import Titulo from './titulo';
import styles from '../../../styles/Cadastro.module.css';

export default function Logo() {
  return (
    <div className={styles.divLogo}>
      <img src="/imgLogo.png" className={styles.img} />
      <Titulo />
    </div>
  );
}
