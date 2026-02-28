import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {

  return (
    <div className=" flex justify-center">
      <div className="mt-20 flex-col w-167 mainSign h-125">
        {!localStorage.getItem('user') ? <div className=' mt-30 form'>
        <Link className='home' to="/signup">Sign Up</Link>
      <Link className='home' to="/login">Log In</Link>
      </div>: <div className='flex justify-center mt-30'><Link className='home' to="/Main">Log In</Link></div>} 
      </div>
      
      <button onClick={() => localStorage.clear()}>Clear Local Storage</button>
    </div>
  )
}

export default App
