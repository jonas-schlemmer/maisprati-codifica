import { useState } from 'react'

function Saudacao({ nome, idade }) { //prop
  return <h2>Olá {nome} seja bem-vindo(a)! Você tem {idade} anos.</h2>
}

export default function App() { // Tem que ser o mesmo nome do componente, com 1a letra maiúscula
  
  const [ contador, setContador ] = useState(0) // Como se fosse um vigia, em mudança de valor, o React redesenha a tela, tendo seu valor inicial como zero.
  
  const [tarefas, setTarefas] = useState([
    {id: 1, texto: "Aprender sobre Props", concluida: true},
    {id: 2, texto: "Entender useState", concluida: true},
    {id: 3, texto: "Estudar Web Components", concluida: false}
  ])

  return (
    <div>
      {/* Outra maneira de declarar
      <Saudacao nome="Schlemmer"></Saudacao> */}
      <Saudacao nome="Jonas" idade='27'/>
      
      <p>
        {contador}
      </p>

      <button onClick={() => setContador(contador - 1)}>-1</button>
      <br/>
      <br/>
      <button onClick={() => setContador(contador + 1)}>+1</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li>{tarefa.id}: {tarefa.texto} - {tarefa.concluida}</li>
        ))}
      </ul>
      
    </div>
  )
}