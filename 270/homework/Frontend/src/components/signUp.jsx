import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = async () => {
    try{
      if (!username || !email || !password){
        alert("fill all fields")
        return
      }
      const obj = {username, email, password}
      const res = await axios.post('http://localhost:3000/users/signUp', obj)
      console.log(res)
      if (res.status == 201){
        const tempObj = {userId:res.data.data.lastInsertRowid,...obj}
        console.log(tempObj)
        localStorage.setItem('user',JSON.stringify(tempObj))
        alert('you registered')
      }
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='parent-sign'>
            <p className='P-rank'>Register</p>
            <form className='child-sign'>
              <label onChange={(e)=>setUsername(e.target.value)}>Username<br ></br><input type='text' className='info-input'></input></label>
              <label onChange={(e)=>setPassword(e.target.value)}>Password<br ></br><input type='password' className='info-input'></input></label>
              <label onChange={(e)=>setEmail(e.target.value)}>Email<br ></br><input type='email' className='info-input'></input></label>
            </form>
            <div className='reg-but'>
              <button onClick={register} className='reg-button'>Register</button>
              <Link to='/' className='returner'>Home</Link>
            </div>
    </div>
  )
}

export default SignUp