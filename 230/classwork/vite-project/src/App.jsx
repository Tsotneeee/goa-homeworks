import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {

  axios.get('http://localhost:3000/tasks').then((res) => {
      setData(res.data.tasks);

  });  }, []);

  return (
    <>
      <ul>

      {data.map(i => (

        <li onClick={() => {
          axios.patch(`http://localhost:3000/tasks/${i.id}/done`);
          setData(prev => prev.map(e => e.id === i.id ? {...e, completed: !e.completed} : e));

        }} style={{textDecoration: i.completed ? "line-through" : "none"}} key={i.id}>{i.text} 
        <button onClick={ () => { axios.delete(`http://localhost:3000/tasks/${i.id}`);
          setData(prev => prev.filter(e => e.id != i.id))
        }}>Delete</button> </li> 
      ))}

      </ul>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>

      <button onClick={() => {
        axios.post('http://localhost:3000/tasks', {text: input, id: data.length+1, completed: false})
        setData(prev => [...prev, {text: input, id: data.length+1, completed: false}])
      }}>Add</button>

    </>
  )
} 

export default App
