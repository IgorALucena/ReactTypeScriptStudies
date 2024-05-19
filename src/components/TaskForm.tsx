import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './TaskForm.module.css'
import { ITask } from '../interfaces/Task'

type Props = {
  button: string;
}


const TaskForm = ({ button }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // pegando os valores dos inputs
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    else {
      setDifficulty(parseInt(e.target.value));
    }
    console.log(difficulty)
    console.log(title)
  }


  return <form onSubmit={addTaskHandler} className={styles.form}>
    <div className={styles.input_container}>
      <label htmlFor='title'> Titulo:</label>
      <input type='text' name='title' placeholder='Título da Tarefa' onChange={handleChange} />
    </div>
    <div className={styles.input_container}>
      <label htmlFor='dificuldade'> Dificuldade:</label>
      <input type='text' name='difficulty' placeholder='Dificuldade da tarefa' onChange={handleChange} />
    </div>
    <input type='submit' value={button} />
  </form>
}

export default TaskForm