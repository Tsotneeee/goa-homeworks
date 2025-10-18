import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  async function fetchData() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data)
      setUsers(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <div>
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      <div>
        {users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
