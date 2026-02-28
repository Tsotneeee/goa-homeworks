import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaCarSide } from "react-icons/fa";

const Footer = () => {
    const [activeUsers, setActiveUsers] = useState(0)

    useEffect(() => {
        getActiveUsers()
    },)

        async function getActiveUsers() {
            try {
                const res = await axios.get('http://localhost:3000/users/active')
                const Data = res.data
            if (Data.success) {
                setActiveUsers(Data.count);
            }else{
                console.log(Data.message)
            }
            } catch (err) {
            console.log(err)
            }
        }

    return (
        <footer className="bg-sky-600 text-white-300 h-50 py-10 px-6">
            <div className="max-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                <h2 className="text-white text-2xl font-bold mb-4">ApexDrive</h2>
                <p className="text-white">
                    Providing the best deals on quality used and new cars since 2000. Your dream ride is just a click away.
                </p>
                </div>
                <div className=' flex flex-col items-center'>
                    <FaCarSide size={68} color='white'/>
                    <p className='text-white text-2xl'>active users: {activeUsers}</p>
                </div>
                <div className="border-t border-white mt-10 pt-6 text-center text-xl">
                    <p className='text-white'>
                        &copy; {new Date().getFullYear()} **ApexDrive**. All rights reserved. 
                        Built with love for car lovers.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer