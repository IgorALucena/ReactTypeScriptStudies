import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './TaskForm.module.css'
import { ITask } from '../interfaces/Task'

type Props = { // definindo os tipos do parametro(props) do componente
  button: string;
  taskList:ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; // o set do usestate é tipado com o dispatch
}

const TaskForm = ({ button, taskList, setTaskList }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => { // inserindo  novas tasks no state localizado no APP
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = {
      id,title,difficulty
    }
    setTaskList!([...taskList,newTask]);

    setTitle(""); // clear
    setDifficulty(0); // clear
    console.log(taskList);
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
      <input type='text' name='title' placeholder='Título da Tarefa' onChange={handleChange} value={title} />
    </div>
    <div className={styles.input_container}>
      <label htmlFor='dificuldade'> Dificuldade:</label>
      <input type='text' name='difficulty' placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty.toString()} />
    </div>
    <input type='submit' value={button} />
  </form>
}

export default TaskForm