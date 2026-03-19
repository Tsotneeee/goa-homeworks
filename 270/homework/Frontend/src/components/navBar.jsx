import {useState} from 'react'
import { Link } from 'react-router-dom'
import { SiGooglemessages } from "react-icons/si";



function NavBar() {
  const [refresh, setRefresh] = useState(true)
  const localuser = JSON.parse(localStorage.getItem('user'))
  
  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify({
      username: '',
      password: '',
      userId: 0,
      email: ''
    }))
    setRefresh(prev => !prev)
  }

  return (
    <nav>
        <div><SiGooglemessages /></div>
        <div><b>Messenger</b></div>
        {
          !localuser || localuser.userId < 1 ?
          <div >
            <Link to="signUp" className='Linker'>Sign Up</Link>
            <Link to="logIn" className='Linker'>Log In</Link>
          </div>:
          <button className='sign-out' onClick={handleLogout}>Log out</button>
        }
        
    </nav>
  )
}

export default NavBar