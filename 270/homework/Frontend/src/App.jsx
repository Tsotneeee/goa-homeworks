import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import NavBar from './components/navBar'
import MessageCard from './components/messageCard'
import { IoSendSharp } from "react-icons/io5";

function App() {
  const [history, setHistory] = useState([])
  const [grpId, setGrpId] = useState(1)
  const [msg, setMsg] = useState('')

  const fetchHistory = async () => {
    try{
      const res = await axios.get(`http://localhost:3000/chat/${grpId}`)
      if (res.data.success){
        setHistory(res.data.data)
        
      }
    }catch(err){
      console.error(err)
    }
    
  }
  
  useEffect(()=>{
    fetchHistory()
  },[])

  const sendMessage = async () => {
    try{
      if (!msg){
        alert('enter the message first')
        return
      }
      const localUser = localStorage.getItem('user')
      const obj = { message:msg, userId:JSON.parse(localUser).userId, groupId:grpId }
      if (localUser == 'null') throw new Error('you are not registered')
      else if (grpId < 1) throw new Error('group need to be 1 or above')
      const res = await axios.post('http://localhost:3000/chat', obj)
      fetchHistory()
    }catch(err){
      console.error(err)
    }
  }

  const changeGroup = ()=>{
    try {
      if (grpId){
        fetchHistory()
      }
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
    <NavBar />
    <div className='inputDiv'>
      <p className='chatText'>Choose a Group Chat</p>
      <input value={grpId} onChange={(e)=>setGrpId(e.target.value)} type="number" className='groupInput' placeholder='enter group id'/>
      <button onClick={changeGroup} className='groupButton'>Join chat</button>
    </div>
    {/* main stuff below */}
    <main>
      {/* <MessageCard username="hello" message="ahh hello"/> */}
      {history.length > 0 ? history.map((el,key)=><MessageCard key={key} username={el.username} message={el.message}/>):
      <p className='no-message'>send the first message</p>
      }
    </main>
    <div className='message-box'>
      <button onClick={fetchHistory} className='refresh-button'>Refresh</button>
      <input onChange={(e)=>setMsg(e.target.value)} type="text" value={msg} className='message-input' placeholder='Enter message'/>
      <button onClick={sendMessage} className='message-button'>
         Send <IoSendSharp className='send-icon'/></button>
    </div>
    </>
  )
}

export default App
