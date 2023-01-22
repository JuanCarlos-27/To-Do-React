export default function Button ({ id, name, svg, handleDelete, handleEdit }) {
  const classname = name ? 'button' : ''

  const handleClick = () => {
    if (handleDelete) return handleDelete(id)
    if (handleEdit) return handleEdit(id)
  }
  return (
    <button className={classname} onClick={handleClick}>
      {name ?? <img src={svg} alt={svg} />}
    </button>
  )
}
