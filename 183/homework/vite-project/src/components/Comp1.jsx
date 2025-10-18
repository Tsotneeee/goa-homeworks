import {useId} from 'react'

function Comp1() {
  const id = useId()
  return (
    <>
        <label htmlFor={id}>Name:</label>
        <input type="text" id={id} />
    </>
  )
}

export default Comp1