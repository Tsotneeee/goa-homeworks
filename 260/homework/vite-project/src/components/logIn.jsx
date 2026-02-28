import { useState } from 'react'
import { data, Link } from 'react-router-dom';
import axios from 'axios';
import { MdHome } from "react-icons/md";

function LogIn() {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    try {
      // send JSON payload; backend likely expects application/json
      const res = await axios.post('http://localhost:3000/users/login', formData)
      const data = res.data
      
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.data))
        alert("you are logged in")
      } else {
        
        alert(data.message)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
      <div className="sign-up-container">
      <div className='log-in-child'>
        <h1 className=' mb-10 text-4xl font-bold text-center'>Log in</h1>

        <form onSubmit={handleSubmit} className=' gap-y-7 gap-x-6  flex flex-wrap' action="">
          <label className=' text-2xl font-medium' htmlFor="username">Username:<br />
            <input className=' putable' type="text" id="username" value={formData.username} onChange={handleChange} />
          </label>
          
          <label className=' text-2xl font-medium' htmlFor="email">Email:<br />
            <input className=' putable' type="email" id="email" value={formData.email} onChange={handleChange} />
          </label>
          
          <label className=' text-2xl font-medium' htmlFor="password">Password:<br />
            <input className=' putable' type="password" id="password" value={formData.password} onChange={handleChange} />
          </label>
        </form>

        <div className='flex justify-center mt-10'>
          <button onClick={handleSubmit} type="submit" className='bg-blue-600 border-3 cursor-pointer border-blue-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>Log in</button>
          <Link className=' goBack' to="/"><MdHome className='homeIcon'/></Link>
        </div>
        
      </div>
    </div>
  )
}

export default LogIn