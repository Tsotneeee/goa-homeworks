import { useState, useEffect } from 'react'

function Counter() {
    const [num, setNum] = useState(0)
    useEffect(()=>{
        setNum(Number(localStorage.getItem("number")) || 0)
    },[])
    
    function Increament(){
        setNum(prev => prev + 1)
        localStorage.setItem("number",num+1)
    }

    function Decreament(){
        setNum(prev => prev - 1)
        localStorage.setItem("number",num-1)
    }

    function Reset(){
        setNum(0)
        localStorage.setItem("number",0)
    }

  return (
    <div>
        <h2>{num}</h2><br ></br>

        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter