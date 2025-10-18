import React from 'react'

function InputSearch(props) {
  return (
    <>
        <input type="text" value={props.search} onChange={(e) => props.setSearch(e.target.value)} /><br></br>
        <h1>Searched: {props.search}</h1>
    </>
  )
}

export default InputSearch