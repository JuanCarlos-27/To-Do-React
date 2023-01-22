import { useEffect, useState } from 'react'
import { Form } from './components/Form'
import { Input } from './components/Input'
import Modal from './components/Modal'
import TaskCard from './components/TaskCard'

function App () {
  const INITIAL_STATE = [
    {
      id: 1000,
      title: 'Aprender REACT JS',
      content:
        'Todos los dias a las 7 de las mañana debo ver un tutorial sobre react para aprender.',
      color: '#fff'
    },
    {
      id: 1001,
      title: 'Terminar el crud que empece',
      content: 'Para practicar react tengo que hacer un todo.',
      color: '#fff'
    }
  ]

  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = JSON.parse(window.localStorage.getItem('tasks'))
    return tasksFromStorage ?? INITIAL_STATE
  })
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [taskEdit, setTaskEdit] = useState({ title: null, content: null })
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify([...tasks]))
  }, [tasks])

  const handleChange = (e) => {
    const target = e.target.dataset.label
    const value = e.target.value

    if (target === 'title') setTitle(value)
    if (target === 'content') setContent(value)

    if (target === 'titleToEdit') setTaskEdit({ ...taskEdit, title: value })
    if (target === 'contentToEdit') { setTaskEdit({ ...taskEdit, content: value }) }
  }

  const handleChangeBgColor = (colorCard, idCard) => {
    const copy = tasks.map((task) => {
      return task.id === idCard ? { ...task, color: colorCard } : task
    })
    setTasks(copy)
  }

  const handleDelete = (cardID) => {
    const newTasks = tasks.filter((task) => task.id !== cardID)
    setTasks(newTasks)
  }

  const handleEdit = (cardId) => {
    const taskToEdit = tasks.filter((task) => task.id === cardId)
    setTaskEdit(...taskToEdit)
    setModalOpen(!modalOpen)
  }

  const generateID = () => {
    return tasks.at(-1).id + 1
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      window.alert('Llene los campos por fa')
      return
    }
    const newTask = {
      id: generateID(),
      color: '#fff',
      title,
      content
    }
    setTasks([...tasks, newTask])
    setTitle('')
    setContent('')
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault()
    // if (taskEdit.title || taskEdit.content || taskEdit.title === '' || taskEdit.content === '') {
    //   window.alert('Llene los campos para editar por fa')
    // }

    const copyOfTasks = [...tasks].map(task => {
      return taskEdit.id === task.id ? { ...task, ...taskEdit } : task
    })

    setTasks(copyOfTasks)
    setModalOpen(!modalOpen)
  }

  return (
    <>
      {modalOpen && (
        <Modal
          taskToEdit={taskEdit}
          handleChange={handleChange}
          handleSubmitEdit={handleSubmitEdit}
        />
      )}
      <main className='container'>
        <header>
          <h1>To Do ✅</h1>
        </header>
        <section>
          <Form handleSubmit={handleSubmit} buttonName='Agregar'>
            <div className='container-title'>
              <Input
                handleChange={handleChange}
                value={title}
                labelName='Titulo'
                dataset='title'
              />
            </div>
            <div className='container-content'>
              <Input
                handleChange={handleChange}
                value={content}
                labelName='Contenido'
                dataset='content'
              />
            </div>
          </Form>
        </section>

        <section className='cards-container'>
          {tasks.map(({ id, title, content, color }) => {
            return (
              <TaskCard
                key={id}
                id={id}
                title={title}
                content={content}
                handleChangeBgColor={handleChangeBgColor}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                backgroundCard={color}
              />
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App
