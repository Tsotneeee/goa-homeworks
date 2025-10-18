import { useState } from 'react'
import useToggle from './hooks/useToggle'
import useWindowResize from './hooks/useWindowResize'
import './App.css'

function App() {
  const [isToggled, toggle] = useToggle()
  const windowSize = useWindowResize()

  return (
    <>
      <h1>{isToggled ? 'On' : 'Off'}</h1>
      <button onClick={toggle}>Toggle</button>
      <p>Window size: {windowSize.width} x {windowSize.height}</p>
    </>
  )
}

export default App
