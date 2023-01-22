export const generateID = (object) => {
  return object.at(-1).id + 1
}
export const INITIAL_STATE_TASKS = [
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
