import React, { useState, useEffect } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function ProfileCard() {
  const userDataRaw = JSON.parse(localStorage.getItem('user'))
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
    address: '',
    gender: ''
  });

  console.log(userDataRaw)
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedUser = {
      username: userDataRaw == null ? 'N/A' : userDataRaw.username,
      email: userDataRaw == null ? 'N/A' : userDataRaw.email,
      password: userDataRaw == null ? 'N/A' : userDataRaw.password,
      number: userDataRaw == null ? 'N/A' : userDataRaw.phone,
      address: userDataRaw == null ? 'N/A' : userDataRaw.address,
      gender: userDataRaw == null ? 'N/A' : userDataRaw.gender,
    }; setUserData(storedUser);console.log(userDataRaw == null)
  }, [])

  return (
    <div className="profile-container relative inline-block">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

        <div className="bg-indigo-600 p-6 text-center">
          <Link to="/"><IoMdArrowBack className="text-white text-2xl" /></Link>
          <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center text-indigo-600 text-3xl font-bold shadow-inner">
            {userData.username.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-white text-4xl font-bold mt-4">{userData.username}</h2>
          <p className="text-indigo-100 text-sm">{userData.gender}</p>
        </div>

        <div className="p-6 space-y-4">

          <div className="flex flex-col border-b border-gray-100 pb-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
            <p className="text-gray-700 font-medium">{userData.email}</p>
          </div>

          <div className="flex flex-col border-b border-gray-100 pb-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">
                {showPassword ? userData.password : '••••••••'}
              </p>
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl cursor-pointer text-indigo-600 hover:underline font-semibold"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex flex-col border-b border-gray-100 pb-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
            <p className="text-gray-700 font-medium">{userData.number}</p>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Home Address</label>
            <p className="text-gray-700 font-medium leading-relaxed">{userData.address}</p>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default ProfileCard