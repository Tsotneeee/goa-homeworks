import { useState, useEffect, createContext } from 'react'
import './App.css'
import Register from './components/regester'
import Home from './components/home'

function App() {
  let logged = localStorage.getItem('logged')

  return (
    <>
      {logged ? <Home /> : <Register />}
    </>
  )
}

export default App
