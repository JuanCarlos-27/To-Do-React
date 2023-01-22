export function Input ({ labelName, dataset, handleChange, value }) {
  return (
    <>
      <label htmlFor={dataset}>{labelName}</label>
      <input type='text' id={dataset} data-label={dataset} onChange={handleChange} value={value} />
    </>
  )
}
