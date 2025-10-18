import { useState } from 'react'
import './App.css'
import Main from './components/Main.jsx'
import SignUp from './components/signUp.jsx'

function App() {
  

  return (
    <>
      {localStorage.getItem('name') ? <Main /> : <SignUp />}
    </>
  )
}

export default App
