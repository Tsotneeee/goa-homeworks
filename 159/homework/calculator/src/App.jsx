import { useState } from 'react'
import './App.css'

function App() {
    const [number, setNumber] = useState("");
    const [operator, setOperator] = useState(null);
    const [number2, setNumber2] = useState("");
    console.log(number, number2, operator);
    let res;
    if (operator === "+") {
        res = Number(number) + Number(number2);
    } else if (operator === "-") {
        res = Number(number) - Number(number2);
    } else if (operator === "*") {
        res = Number(number) * Number(number2);
    } else if (operator === "/") {
        res = Number(number) / Number(number2);
    }

  return (
    <>
      <div className=' calcer rounded-2xl border-2 w-56 m-auto mt-30 p-2'>
        <p>{number} {operator} {number2} {number2 && "="}</p>
        <p className=' text-center text-2xl font-bold'>{res}</p><br></br>

        <div className=' flex flex-wrap justify-center gap-2'>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "0") : setNumber2(prev => prev + "0")}}>0</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "1") : setNumber2(prev => prev + "1")}}>1</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "2") : setNumber2(prev => prev + "2")}}>2</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "3") : setNumber2(prev => prev + "3")}}>3</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "4") : setNumber2(prev => prev + "4")}}>4</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "5") : setNumber2(prev => prev + "5")}}>5</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "6") : setNumber2(prev => prev + "6")}}>6</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "7") : setNumber2(prev => prev + "7")}}>7</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "8") : setNumber2(prev => prev + "8")}}>8</button>
          <button onClick={()=>{(operator == null) ? setNumber(prev => prev + "9") : setNumber2(prev => prev + "9")}}>9</button>
          <button onClick={()=>{setOperator("+")}}>+</button>
          <button onClick={()=>{setOperator("-")}}>-</button>
          <button onClick={()=>{setOperator("*")}}>*</button>
          <button onClick={()=>{setOperator("/")}}>/</button>
          <button onClick={()=>{setNumber(""); setNumber2(""); setOperator(null);}}>clear</button>
        </div>
      </div>
    </>
  )
}

export default App
