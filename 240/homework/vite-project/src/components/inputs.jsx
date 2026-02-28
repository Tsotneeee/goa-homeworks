import {useState} from 'react'

function Inputs() {
    const [list, setList] = useState([])
  return (
    <div>
        {list.map((itm)=><p>{itm}</p>)}
        <form onSubmit={(e)=>{e.preventDefault();setList(prev => [...prev, e.target.input.value]);console.log(list)}}>
            <input type="text" name='input' />
            <button type='submit' name='submit'>submit</button>
        </form>
    </div>
  )
}

export default Inputs