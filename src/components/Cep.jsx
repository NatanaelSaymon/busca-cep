
import styles from './Cep.module.css'
import search from '../assets/icon-search.png'

export function Cep() {
    return(
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>Buscador de CEP</h1>

            <div className={styles["containerInput"]}>
                <input type="text" className={styles['input']} placeholder="digite seu cep..."/>
                <button className={styles["buttonSearch"]}>
                    <img src={search} alt="Icone Search" />
                </button>
            </div>

            <main className={styles["main"]}>
                <h2>CEP: 08141140</h2>
                <span>Endereço: Rua Ilha da Cananeia</span>
                <span>Bairro: Jardim Indaia</span>
                <span>Cidade: São Paulo/ SP</span>
            </main>
        </div>
    )
}