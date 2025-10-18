import { createContext, useState } from 'react'
import './App.css'
import Comp1 from './components/Comp1'

export const MyContext = createContext()

function App() {
  const [cond, setCond] = useState(false)

  return (
    <MyContext.Provider value={cond}>
      <h1>hello</h1>
      <button onClick={() => setCond(!cond)}>click</button>
      <Comp1 />
    </MyContext.Provider>
  )
}

export default App
