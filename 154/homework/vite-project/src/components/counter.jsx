import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
    <>
    <h1 className=' text-'>{count}</h1>
    <button onClick={()=> setCount(prev => prev + 1)} className=' border-2 rounded-2xl m-1 p-2 cursor-pointer'>Increment</button>
    <button onClick={()=> setCount(prev => prev - 1)} className=' border-2 rounded-2xl m-1 p-2 cursor-pointer'>Decrement</button>
    <button onClick={()=> setCount(0)} className=' border-2 rounded-2xl m-1 p-2 cursor-pointer'>reset</button>
    
    </>
    )
}
