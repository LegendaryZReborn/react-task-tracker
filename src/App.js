import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAdd, setShowAdd] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks())
    }

    getTasks()
  }, [])

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    return res.json()
  }

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updatedTask = {
      ...task,
      reminder: !task.reminder
    }
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    setTasks(
      tasks.map(task => task.id === id ? updatedTask : task)
    )
  }

  const addTask = async (data) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const newTask = await res.json()
    console.log(newTask)
    setTasks([...tasks, newTask])
    toggleAdd()
  }

  const toggleAdd = () => {
    setShowAdd(!showAdd)
  }

  return (
    <Router>
      <div className='container'>
        <Header title='Task Tracker' showAdd={showAdd} toggleAdd={toggleAdd} />
        <Routes>
          <Route path='/' exact element={
            <>
            {showAdd && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}  />
              : 'No tasks to show' }
            </>
           }/>
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
