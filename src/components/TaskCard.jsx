import svgDelete from '../assets/delete.svg'
import svgEdit from '../assets/edit.svg'
import Button from './Button'
import CardColor from './CardColors'
export default function TaskCard ({ id, title, content, backgroundCard, handleChangeBgColor, handleDelete, handleEdit }) {
  const handleClick = (e) => {
    handleChangeBgColor(e.target.dataset.color, id)
  }

  return (
    <article className='task-card' style={{ backgroundColor: backgroundCard }}>
      <h3 className='task-title'>{title}</h3>
      <section className='task-content'>
        <p>{content}</p>
      </section>
      <footer className='task-footer'>
        <div className='task-actions'>
          <Button svg={svgDelete} handleDelete={handleDelete} id={id} />
          <Button svg={svgEdit} handleEdit={handleEdit} id={id} />
        </div>
        <div className='task-color'>
          <CardColor color='#ff6961' handleClick={handleClick} />
          <CardColor color='#a3ffac' handleClick={handleClick} />
          <CardColor color='#fdfd96' handleClick={handleClick} />
          <CardColor color='#84b6f4' handleClick={handleClick} />
          <CardColor color='#fdcae1' handleClick={handleClick} />
        </div>
      </footer>
    </article>
  )
}
