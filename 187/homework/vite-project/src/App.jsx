import { useState, useTransition, useEffect } from 'react'
import useDebounce from './hooks/useDebounce'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 200)
  const [isPending, startTransition] = useTransition()
  const [arr, setArr] = useState([])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    startTransition(() => {
      const newArr = new Array(10000).fill(debouncedValue)
      setArr(newArr)
    })
  }, [debouncedValue, startTransition])

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />

      {isPending ? <><br /><br />Loading...</> : arr.map((item, index) => <p key={index}>{item}</p>)}
    </>
  )
}

export default App
