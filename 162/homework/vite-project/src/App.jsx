import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let formEl = e.currentTarget;
    let formData = new FormData(formEl);
    let Name = formData.get('name');
    let Description = formData.get('description');
    setName(Name); setDescription(Description);
    console.log(Name, Description);
  }

  return (
    <>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input className=' border-2' type="text" name='name'  />
        <input className=' border-2' type="text" name='description'  />
        <button>Submit</button>
      </form><br />
      <Card name={name} description={description} />
    </>
  )
}

export default App
