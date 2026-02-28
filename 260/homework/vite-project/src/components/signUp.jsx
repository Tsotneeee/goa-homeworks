import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdHome } from "react-icons/md";

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    gender: ''
  })

  function handleChange(e) {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    console.log(formData)
  }

  async function sendData(){
    try{
      const res = await axios.post('http://localhost:3000/users', formData);
      const data = await res.data
      if (data.success){
        console.log(data.data)
        localStorage.setItem("user", JSON.stringify(data.data))
      } else {
        alert(data.message)
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="sign-up-container">
      <div className='sign-up-child'>
        <h1 className=' mb-10 text-4xl font-bold text-center'>Sign Up</h1>

        <form className=' gap-y-6 gap-x-6  flex flex-wrap' action="">
          <label className=' text-2xl font-medium' htmlFor="username">Username:<br />
            <input className=' putable' type="text" id="username" value={formData.username} onChange={handleChange} />
          </label>
          
          <label className=' text-2xl font-medium' htmlFor="email">Email:<br />
            <input className=' putable' type="email" id="email" value={formData.email} onChange={handleChange} />
          </label>
          

          <label className=' text-2xl font-medium' htmlFor="password">Password:<br />
            <input className=' putable' type="password" id="password" value={formData.password} onChange={handleChange} />
          </label>
          

          <label className=' text-2xl font-medium' htmlFor="address">Address:<br />
            <input className=' putable' type="text" id="address" value={formData.address} onChange={handleChange} />
          </label>
          

          <label className=' text-2xl font-medium' htmlFor="phone">Phone:<br />
            <input className=' putable' type="text" id="phone" value={formData.phone} onChange={handleChange} />
          </label>
          

          <label className=' text-2xl font-medium' htmlFor="gender">Gender:<br />
            <input className=' putable' type="text" id="gender" value={formData.gender} onChange={handleChange} />
          </label>
          
        </form>

        <div className='flex justify-center mt-10'>
          <button onClick={sendData} className='bg-blue-600 border-3 cursor-pointer border-blue-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>Sign Up</button>
          <Link className=' goBack' to="/"><MdHome className='homeIcon'/></Link>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp