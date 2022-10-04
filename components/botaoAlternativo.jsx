import styles from '../styles/botao.module.css'
import Link from 'next/link';
export default function Botao(props){
    return(
        <button className={styles.alternativo} type='button'><Link href={props.endereco}><a style={{color:'#112147'}}>{props.valor}</a></Link></button>
    )
}