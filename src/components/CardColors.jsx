export default function CardColor ({ color, handleClick }) {
  return <div style={{ backgroundColor: color }} onClick={handleClick} data-color={color} />
}
