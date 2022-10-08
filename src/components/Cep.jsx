import { useState } from 'react'
import styles from './Cep.module.css'
import search from '../assets/icon-search.png'
import api from '../services/api'

export function Cep() {

    const [cep, setCep] = useState('')
    const [cepData, setCepData] = useState({})

    async function handleSearchCep() {
        if(cep === '') {
            alert('Preencha algum cep')
            return
        }
       
        try {
            const response = await api.get(`${item}/json`);
            setCepData(response.data)
        }

        catch {
            alert('Erro ao buscar o CEP')
            setCep('')
        }
    }

    return(
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>Buscador de CEP</h1>
            
            <div className={styles["containerInput"]}>
                <input 
                    type="text" 
                    className={styles['input']} 
                    placeholder="digite seu cep..."
                    value={cep}
                    onChange={(event) => { setCep(event.target.value) }}
                />
                
                <button className={styles["buttonSearch"]} onClick={handleSearchCep}>
                    <img src={search} alt="Icone Search" />
                </button>
            </div>

            {Object.keys(cepData).length > 1 && (
                <main className={styles["main"]}>
                    <h2>{cepData.cep}</h2>
                    <span>{cepData.logradouro}</span>
                    <span>{cepData.bairro}</span>
                    <span>{cepData.localidade} - {cepData.uf}</span>
                </main>
            )}
        </div>
    )
}