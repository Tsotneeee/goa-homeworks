import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#000")
  const [gridX, setGridX] = useState(3)
  const [gridY, setGridY] = useState(3)
  const [lightMode, setLightMode] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setGridX(Number(form.gridX.value))
    setGridY(Number(form.gridY.value))
    setColor(form.color.value)
  }

  document.body.style.backgroundColor = lightMode ? '#242424' : '#aaaadd';

  return (
    <>
    {/* start of my braindamage */}
      <div 
        style={{display: "grid", gridTemplateColumns: `repeat(${gridX}, 1fr)`,gridTemplateRows: `repeat(${gridY}, 1fr)`,gap: "3px",width: "300px",height: "300px",
        }}>
        {Array.from({ length: gridX * gridY }).map((trash, index) => (
          <div onMouseOver={(e) => { e.target.style.backgroundColor = color; e.target.style.borderColor = color; }} className=' border-2' onClick={(e) => { e.target.style.backgroundColor = color; e.target.style.borderColor = color; }} key={index}></div>))}
      </div>{/* slight reduction of my brain damage */}
      <br />
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input className='border-2' type="number" name='gridX' placeholder='X grid' />
          <input className='border-2' type="number" name='gridY' placeholder='Y grid' /><br />
          <input className='border-2' type="color" defaultValue={"#000"} name='color' /><br />

          <button onClick={() => setTimeout(() => setColor("#ff0000"), 20)}>red</button>
          <button onClick={() => setTimeout(() => setColor("#f7fa38"), 20)}>yellow</button>
          <button onClick={() => setTimeout(() => setColor("#000"), 20)}>black</button>
          <button onClick={() => setTimeout(() => setColor("#ffffff"), 20)}>white</button><br />
          <button onClick={()=> setLightMode(prev => !prev)}>lightmode toggle</button>

          <button type='submit'>submit</button>
        </form>
      </div>
    </>
  )
}

export default App
