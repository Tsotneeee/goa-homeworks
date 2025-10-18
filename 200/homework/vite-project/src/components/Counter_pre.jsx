import React from 'react'

function Counter_pre(props) {
  return (
    <>
    <h1>count: {props.count}</h1>
    <br />
    <h4>step: {props.step}</h4>
    <br /><br />
    <button onClick={props.incr}>Increment</button>
    <button onClick={props.decr}>Decrement</button>
    <br /><br />
    <input className='border-2 border-gray-400 p-2 rounded m-2' type="number" ref={props.inputRef} />
    <button onClick={props.setStep}>Set Step</button>
    </>
  )
}

export default Counter_pre