import { useState } from "react";
import styles from '../styles/input.module.css'

export default function Input(props){
    const [conteudo, setConteudo] = useState("")
    return(
        <input className = {styles.Entrada} type={props.tipo} placeholder={props.valor} value={conteudo} onChange={e => setConteudo(e.target.value)}/>

    )
}