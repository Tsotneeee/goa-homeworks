import {useRef} from 'react'

function UseReffer() {
    const num = useRef(0);
    console.log(num.current);

  return (
    <>
    <h1>{num.current}</h1>
    <button onClick={() => {num.current++;console.log(num.current)}}>Increment</button><br />
    </>
  )
}

export default UseReffer