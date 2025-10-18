import { useContext } from 'react'
import { MyContext } from '../App.jsx'

function Comp5() {
  const cond = useContext(MyContext)
  return (
    <div className={`w-32 h-32 ${cond ? 'bg-amber-200' : 'bg-amber-700'}`}></div>
  )
}

export default Comp5