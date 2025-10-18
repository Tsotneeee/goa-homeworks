import {useState, useRef, use} from 'react'
import Counter_pre from './Counter_pre'

function Counter_alg() {
  const [count, setCount] = useState(0)
  let step = useRef(1)
  const inputRef = useRef(null)

  function decr() {
    setCount(count - step.current)
  }

  function incr() {
    setCount(count + step.current)
  }

  function setStep() {
    step.current = Number(inputRef.current.value)
  }
 // inputRef , setStep , incr , decr
  return (
    <>
        <Counter_pre inputRef={inputRef} setStep={setStep} incr={incr} decr={decr} count={count} step={step.current} />

    </>
  )
}

export default Counter_alg