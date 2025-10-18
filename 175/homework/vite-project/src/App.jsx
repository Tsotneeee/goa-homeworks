import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [stopped, setStopped] = useState(true)
  const inputRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!stopped && count > 0) {
      intervalRef.current = setInterval(() => {
        setCount((c) => {
          if (c <= 1) {
            setStopped(true)
            clearInterval(intervalRef.current)
            return 0
          }
          return c - 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [stopped, count])

  const handleSet = () => {
    const val = Number(inputRef.current.value)
    if (val > 0) {
      setCount(val)
      setStopped(false)
    }
  }

  return (
    <>
      <h1 className=' m-auto inline-block text-6xl bg-blue-300 CS rounded-2xl p-2'>{count}</h1><br /><br />
      <input className=' border-2 rounded-2xl p-1.5' type="number" ref={inputRef} /><br /><br />
      <button className=' text-amber-50 bg-emerald-600 cursor-pointer border-2 rounded-2xl p-2' onClick={handleSet}>reset/set</button>
    </>
  )
}

export default App
