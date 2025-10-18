import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [con , setCon] = useState(true)

  document.addEventListener('click',()=>{
    setCon(!con)
    document.body.style.backgroundColor = con ? 'red' : 'green'
  })
  
  return (
    <>
    <h1>{text}</h1><br></br>
      <input className='p-2 border-2' type="text" value={text} onChange={(e) => setText(e.target.value)} />

    </>
  )
}

export default App
