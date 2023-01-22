export default function Button ({ id, name, svg, handleDelete, handleEdit }) {
  const classname = name ? 'button' : ''

  if (handleDelete) {
    return (
      <button className={classname} onClick={() => handleDelete(id)}>
        {name ?? <img src={svg} alt={svg} />}
      </button>
    )
  }
  if (handleEdit) {
    return (
      <button className={classname} onClick={() => handleEdit(id)}>
        {name ?? <img src={svg} alt={svg} />}
      </button>
    )
  }

  return (
    <button className={classname}>
      {name ?? <img src={svg} alt={svg} />}
    </button>
  )
}
