import { useState } from 'react'
import './App.css'
import "../public/photo.jpg"

function App() {


  	return (
	<>
		<div className=' px-50 py-25'>
	  		<img className=' w-50 h-50 object-cover rounded-full' src="photo.jpg" alt="not working" />
			<p className=' w-180 top-45 right-90 absolute font-bold'>Hello, I'm a web developer! I am 15 years old. I am currently learning React, JavaScript,
				 and Python to improve my skills and build modern web applications.</p>
				<br />
			<a className=' underline' href="https://github.com/Tsotneeee">my Github</a><br></br>
			<a className=' underline' href="https://www.facebook.com/tsotne.bajelidze">my Facebook</a>
		</div>
		
	</>
  	)
}

export default App
