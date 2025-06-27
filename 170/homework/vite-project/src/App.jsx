import { useState } from 'react'
import { StopWatch } from './compononts/StopWatch'
import './App.css'

function App() {

	const [con, setCon] = useState(true);
  	return (
    <>
		{con && <StopWatch con={con}/>}
		<button className=' border cursor-pointer' onClick={()=>setCon(prev => !prev)}>stop/resume</button>
    </>
  )
}

export default App
