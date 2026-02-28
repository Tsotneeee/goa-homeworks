import React from 'react'
import axios from 'axios'

function Card(props) {
    async function addOne() {
        try {
            const res = await axios.patch(`http://localhost:3000/products/${props.id}`, {count: props.count + 1})
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className="card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.count}</p>
        <button onClick={addOne}>add 1</button>
    </div>
  )
}

export default Card