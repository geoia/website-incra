import Input from "../../ui/divInput/input"
import styles from "../../../styles/Cadastro.module.css"
import Link from 'next/link';

export default function DivLocalizacao(){
    return(
        <div className={styles.divLocalizao}>
            <p className={styles.text}>Localização</p>
            <Input placeholder="Estado" tipo="text"/>
            <Input placeholder="Cidade" tipo="text"/>
            <div className={styles.divCheckbox}>
                <input type="checkbox" name="Termos"/>
                <label htmlFor="Termos">Eu li e aceito os termos de contrado e permito o uso dos dados</label>
            </div>
            <button className={styles.button} type="submit"><Link href="../"><a style={{textDecoration:'none', color:'#ffffff',fontWeight:'bold'}}>Cadastrar</a></Link></button>
        </div>
    )
}