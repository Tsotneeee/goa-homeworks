import { useState } from 'react'
import './App.css'
import Comp from './components/Comp'

function App() {

  return (
    <>
      <h1>{Comp().name}</h1>
      <h2>{Comp().lastname}</h2>
      <h3>{Comp().age}</h3>
    </>
  )
}

export default App
