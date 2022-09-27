import React from "react"
import styles from "../../../styles/Cadastro.module.css"

export default function Input(props){
    return(
        <div className={styles.divInput}>
            <input type={props.tipo} placeholder={props.placeholder} required/>
        </div>
    )
};