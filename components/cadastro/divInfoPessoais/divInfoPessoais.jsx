import Input from "../../ui/divInput/input"
import styles from "../../../styles/Cadastro.module.css"

export default function DivInfoPessoais(){
    return(
        <div className={styles.divInfoPessoais}>
            <p>Informações Pessoais</p>
            <Input placeholder='Nome' tipo="text"/>
            <Input placeholder='Email' tipo="email"/>
            <Input placeholder='Escolaridade' tipo="text"/>
            <Input placeholder='Senha' tipo="password"/>
            <Input placeholder='Confirmar Senha' tipo="password"/>
        </div>
    )
};