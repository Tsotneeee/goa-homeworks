import axios from 'axios'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  const [userInfo, setUserInfo] = useState({
    username:'',
    email:'',
    password:''
  })

  const logInator = async () => {
    try{
      const res = await axios.post('http://localhost:3000/users/logIn',userInfo)
      const data = res.data.data
      if (res.data.success) {
        let tempObj = {userId:data.id, username:data.username,password:data.password,email:data.email}
        localStorage.setItem('user',JSON.stringify(tempObj))
        alert('you logged in')
      }else if (!res.data.success){
        alert(res.data.message)
        return
      }
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='parent-sign'>
      <p className='P-rank'>Log in</p>
      <form className='child-sign'>
        <label >Username<br ></br><input value={userInfo.username} onChange={(e)=>setUserInfo(prev => ({...prev, username: e.target.value}))} type='text' className='info-input'></input></label>
        <label >Password<br ></br><input value={userInfo.password} onChange={(e)=>setUserInfo(prev => ({...prev, password: e.target.value}))} type='password' className='info-input'></input></label>
        <label >Email<br ></br><input value={userInfo.email} onChange={(e)=>setUserInfo(prev => ({...prev, email: e.target.value}))} type='email' className='info-input'></input></label>
      </form>
      <div className='reg-but'>
        <button onClick={logInator} className='reg-button'>Log in</button>
        <Link to='/' className='returner'>Home</Link>
      </div>
    </div>
  )
}

export default LogIn