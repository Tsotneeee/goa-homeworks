import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Users from './components/users'
import { Link, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
