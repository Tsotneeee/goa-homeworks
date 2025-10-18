import { useState, useEffect } from 'react'
import MainPage from './components/MainPage'
import Register from './components/Register'
import './App.css'

function App() {
  console.log(localStorage)
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true')

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn)
  }, [loggedIn])

  return (
    <>
      {loggedIn ? <MainPage /> : <Register setLoggedIn={setLoggedIn} />}
    </>
  )
}

export default App
