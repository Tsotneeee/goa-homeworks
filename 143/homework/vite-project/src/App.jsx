import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

  	return (
    <>
		<h1>hello</h1>
		<p>{count}</p>
		<button onClick={ () => setCount(count + 1) }>click to add</button>
	</>
  	)
}

export default App
