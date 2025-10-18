import { useReducer } from 'react'

import './App.css'
let id;
function tmReducer(state, action) {
  switch (action.type) {
    case 'start':
      id = setInterval(()=>{
        console.log(state)
        return state + 1
      })
    case 'stop':
      clearInterval(id)
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer( tmReducer , 0)

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'start' })}>start</button><br></br>
      <button onClick={() => dispatch({ type: 'stop' })}>stop</button>
    </>
  )
}
//stopwatch
export default App
