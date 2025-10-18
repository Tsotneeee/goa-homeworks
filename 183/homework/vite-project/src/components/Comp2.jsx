import {useId} from 'react'

function Comp2() {
  const id = useId()
  return (
    <>
        <label htmlFor={id}>Name:</label>
        <input type="text" id={id} />
    </>
  )
}

export default Comp2