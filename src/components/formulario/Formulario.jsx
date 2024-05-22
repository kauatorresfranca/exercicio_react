import { useState, useEffect } from "react"
import styles from './Formulario.module.css'

const Formulario = function() {
    let [altura, setAltura] = useState(0)
    let [peso, setPeso] = useState(0)

    const calculaIMC = () => {
        const imc =  peso / (altura ** 2)
        return imc.toFixed(2)
    }
    const classificacao = () => {
        if (calculaIMC() < 18.5){
            return 'magreza'
        }
        else if (calculaIMC() >= 18.5 && calculaIMC() < 24.9){
            return 'normal'
        }
        else if (calculaIMC() >= 25.0 && calculaIMC() < 29.9){
            return 'sobrepeso'
        }
        else if (calculaIMC() >= 30.0 && calculaIMC() < 39.9){
            return 'obesidade'
        }
        else if (calculaIMC() > 40){
            return 'obesidade morbida'
        }
    }
    return(
        <div className="container">
            <form>
                <div>
                    <label htmlFor="altura">altura (cm) : <span className={styles.span}>ex: 1.80</span></label>
                    <input className={styles.input} id="altura" type="number" onChange={evento => setAltura(evento.target.value)}/>
                </div>
                <div>
                    <label htmlFor="peso">peso: (kg) : <span className={styles.span}>ex: 74</span></label>
                    <input className={styles.input} id="peso" type="number" onChange={evento => setPeso(evento.target.value)}/>
                </div>
            </form>
            seu imc: {calculaIMC()} <br />
            sua classificacao: {classificacao()}
        </div>
    )
}
export default Formulario