import { useState } from 'react'
import axios from 'axios'
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom'

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function sendData() {
        try {
            if (!username || !password) {
                alert('Please fill in all fields')
                return
            }
            const response = await axios.post('http://localhost:3000/login',
                 {username, password})
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className=' flex justify-center'>
        <div className=' mt-20 flex-col w-167 mainSign h-125'>
          <h1 className=' mb-3 text-center'>Log In</h1>
            <form className=' form'>
                <label>Username:<br /><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
                <label>Password:<br /><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
            </form>
            <div className=' gap-2 mt-7 flex justify-center'>
                <button className=' block signUp' onClick={sendData}>Log In</button>
                <Link className='home' to="/"><MdHome className='homeIcon'/>Home</Link>
            </div>
        </div>
    </div>
  )
}

export default LogIn