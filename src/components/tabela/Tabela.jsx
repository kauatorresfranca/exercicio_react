import style from './Tabela.module.css'
const Tabela = function(){



    return(
        <div className="container">
            <table className={style.table}>
                <thead>
                    <tr className={style.titulo}>
                        <td>
                            IMC
                        </td>
                        <td>
                            CLASSIFICAÇÂO
                        </td>
                    </tr>
                    <tr className={style.tableLine}>
                        <td>
                            MENOR QUE 18.5
                        </td>
                        <td>
                            MAGREZA
                        </td>
                    </tr>
                    <tr className={style.tableLineSucess}>
                        <td>
                            ENTRE 18.5 E 24.9
                        </td>
                        <td>
                            NORMAL
                        </td>
                    </tr>
                    <tr className={style.tableLine}>
                        <td>
                            ENTRE 25.0 E 29.9
                        </td>
                        <td>
                            SOBREPESO
                        </td>
                    </tr>
                    <tr className={style.tableLine}>
                        <td>
                            ENTRE 30.0 E 39.9
                        </td>
                        <td>
                            OBESIDADE
                        </td>
                    </tr>
                    <tr className={style.tableLine}>
                        <td>
                            MAIOR QUE 40
                        </td>
                        <td>
                            OBESIDADE GRAVE
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Tabela