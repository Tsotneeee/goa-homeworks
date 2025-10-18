import { useState, useReducer } from 'react'

import './App.css'

function reducer( state, action ) {
  switch ( action.type ) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function App() {
  const [ state, dispatch ] = useReducer( reducer, 0 )

  return (
    <>
      <h1>{state}</h1>
      <button className=' border-2' onClick={() => dispatch({ type: 'increment' })}>Increment</button><br />
      <button className=' border-2' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  )
}

export default App
