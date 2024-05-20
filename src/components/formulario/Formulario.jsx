import { useState, useEffect } from "react"
import styles from './Formulario.module.css'

const Formulario = function() {
    let [altura, setAltura] = useState(0)
    let [peso, setPeso] = useState(0)

    const calculaIMC = () => {
        const imc =  peso / (altura ** 2)
        return parseInt(imc)
    }

    return(
        <div className="container">
            <form>
                <div>
                    <label htmlFor="altura">altura:</label>
                    <input className={styles.input} id="altura" type="number" onChange={evento => setAltura(evento.target.value)}/>
                </div>
                <div>
                    <label htmlFor="peso">peso:</label>
                    <input className={styles.input} id="peso" type="number" onChange={evento => setPeso(evento.target.value)}/>
                </div>
            </form>
            seu imc: {calculaIMC()}
        </div>
    )
}
export default Formulario