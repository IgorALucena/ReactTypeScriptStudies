import React from 'react'

type Props = {
    button:string
}

const TaskForm = ({button}: Props) => {
  return <form>
    <div>
        <label htmlFor='title'> Titulo:</label>
        <input type='text'name='title' placeholder='Título da Tarefa'/>
    </div>
    <div>
        <label htmlFor='dificuldade'> Dificuldade:</label>
        <input type='text'name='difficulty' placeholder='Dificuldade da tarefa'/>
    </div>
    <input type='submit' value={button} />
  </form>
}

export default TaskForm