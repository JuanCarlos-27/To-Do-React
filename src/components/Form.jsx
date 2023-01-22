import Button from './Button'

export function Form ({ children, handleSubmit, buttonName }) {
  return (
    <form onSubmit={handleSubmit}>
      {children}
      <div className='container-button'>
        <Button name={buttonName} />
      </div>
    </form>
  )
}
