import {useState} from 'react'

function Home() {
  const [count, setCount] = useState(localStorage.getItem('count') || 0)

  return (
    <>
    <h1>count: {count}</h1>
    <button onClick={() => {
      setCount(count + 1)
      localStorage.setItem('count', count + 1)
    }}>Increment</button>
    <br></br><br></br>
    <button onClick={() => localStorage.setItem('logged', false)}>Log out</button>
    </>
  )
}

export default Home