import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function clicked() {
    setCount(count + 1);
  }
  const res = count % 2 === 0 ? 'yes' : 'no';
  const num = count % 2 === 0;
  

  return (
    <>
      <button onClick={clicked} style= {{ background: num ? 'green' : 'red' }} >{res}</button>
    </>
  );
}

export default App;
