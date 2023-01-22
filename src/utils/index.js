export const generateID = (object) => {
  return object.at(-1).id + 1
}
export const INITIAL_STATE_TASKS = [
  {
    id: 1000,
    title: 'Tu primer tarea',
    content:
        '¡Aquí debe describir brevemente el propósito de su tarea! 🤓',
    color: '#fff'
  }
]
