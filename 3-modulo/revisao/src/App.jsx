import { useState } from 'react'
import Header from './components/Header'
import CardUsuario from './components/CardUsuario'

function App() {
  const nomeDoCurso = "React +PraTi"
  const [concluidas, setConcluidas] = useState(0)
  
  return (
    <>
      <Header />

      <CardUsuario nome="Jonas" curso="React" />
      <CardUsuario nome="Schlemmer" curso="JavaScript" />

      <p>Tarefas concluídas: {concluidas}</p>
      <button onClick={() => setConcluidas(concluidas + 1)}>
        Concluir Tarefa
      </button>
    </>
  )
}

export default App
