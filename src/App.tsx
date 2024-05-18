import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './App.module.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Header/>
        <main className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm button="Criar Tarefa"/>
          </div>
          <div>
            <h2>Suas Tarefas</h2>
            <TaskList/>
          </div>
        </main>
        <Footer/>
      </div>
  )
}

export default App