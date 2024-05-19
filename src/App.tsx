import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './App.module.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { ITask } from './interfaces/Task'
import Modal from './components/Modal'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null); // gerencia a atualização

  /*Estados controlados pelo elemento pai possuem seus métodos [CRUD p/ exemplo] também no seu elemento pai*/

  const deleteTask = (id: number) => { //passado via props
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => { /*Função de edição unida a lógica da abertura do modal*/
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };


  return (
    <div>
      <Modal children={<TaskForm button='Editar tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />} /> {/*Passando um componente como props para renderização do formulário via modal */} {/*O estado do taskupdate captado no tasklist é inserido no modal*/}
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm button="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
