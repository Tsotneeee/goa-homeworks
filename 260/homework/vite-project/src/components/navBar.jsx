import { useState } from 'react'
import { FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import ProfileCard from './profileCard';

function NavBar() {
    const [refresh, setRefresh] = useState(false)
    const userExists = localStorage.getItem('user');

  return (
    <nav className=' navigator p-6 pb-6 flex justify-between'>
        <div className=' align-middle flex gap-5 '>
            <Link to="/" className='carIcon'><FaCarSide className='carIcon'/></Link>
            <h1 className=' font-semibold text-4xl'>ApexDrive</h1>
        </div>

        <div className=' p-2'>
            <Link to="/about-us" className=' linkBtn'>About us</Link>
            <Link to="/contact-us" className=' linkBtn'>Contact us</Link>
            <Link to="/cart" className='linkBtn'>Cart</Link>
        </div>
        
        <div className=' flex'>
            {localStorage.getItem('user') == 'null' ?
                <div>
                <Link to="/login" className='linkBtn'>Log In</Link>
                <Link to="/signup" className='linkBtn'>Sign Up</Link>
                </div> : <button className='linkBtn' onClick={() => {localStorage.setItem('user', null);setRefresh(prev => !prev)}}>Logout</button>}
            <Link to="/profile" className=' flex flex-col justify-center cursor-pointer'><IoMdContact className='prfileIcon'/></Link>
            
        </div>
    </nav>
  )
}

export default NavBar