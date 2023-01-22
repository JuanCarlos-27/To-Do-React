import { Form } from './Form'
import { Input } from './Input'

export default function Modal ({ taskToEdit, handleChange, handleSubmitEdit }) {
  const { title, content } = taskToEdit
  return (
    <div className='modal'>
      <div className='modal-content'>
        <Form buttonName='Guardar' handleSubmit={handleSubmitEdit}>
          <Input dataset='titleToEdit' labelName='Titulo' value={title} handleChange={handleChange} />
          <Input dataset='contentToEdit' labelName='Contenido' value={content} handleChange={handleChange} />
        </Form>
      </div>
    </div>
  )
}
