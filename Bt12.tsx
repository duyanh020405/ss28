import React from 'react'
const show =()=>{
    let input = document.getElementById("show")
}
export default function Bt12() {
  return (
    <div>
        <h4>Bai 12</h4>
        <p>input la : {input}</p>
      <input type="text" id='show' />
      <button onClick={show}>Lay input</button>
    </div>
  )
}
