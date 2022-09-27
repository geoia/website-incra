import DivTitulo from "./divTitulo"
import styles from "../../../styles/Cadastro.module.css"

export default function DivLogoeNome(){
    return(
        <div className={styles.divLogo}>
            <img src="/imgLogo.png" className={styles.img}/>
            <DivTitulo/>
        </div>
    )
};