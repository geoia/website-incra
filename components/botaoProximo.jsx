import styles from '../styles/botao.module.css';
import Link from 'next/link';
export default function Botao(props){
    return(
        <button  className={styles.proximo} type='button'><Link href={props.endereco}><a style={{textDecoration:'none', color:'#ffffff'}}>{props.valor}</a></Link></button>
    )
}