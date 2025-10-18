import { useState, useEffect, use } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stop, setStop] = useState(false)

  useEffect(()=>{
    let interval = setInterval(()=>{
      if(!stop){
        setCount((count) => count + 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [stop])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setStop(!stop)}>{stop ? 'Start' : 'Stop'}</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App
