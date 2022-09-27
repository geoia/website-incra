import DivLogoeNome from "../../ui/divLogo/divLogoeTitulo"
import DivInfoPessoais from "./divInfoPessoais"
import styles from "../../../styles/Cadastro.module.css"

export default function DivLogo(){
    return(
        <div className={styles.divInicial}>
            <DivLogoeNome/>
            <DivInfoPessoais/>
        </div>
    )
};