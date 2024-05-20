import { useState } from 'react'
import './App.css'
import Formulario from './components/formulario/Formulario'
import Tabela from './components/tabela/Tabela'
import Cabecalho from './components/cabecalho/Cabecalho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Formulario/>
      <Tabela/>
    </>
  )
}

export default App
