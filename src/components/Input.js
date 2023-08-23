import React from 'react'
import send from "../img/send.png"
import file from "../img/file.png"


const Input = () => {
  return (
    <div className='input'>
        <input type='text' placeholder='type something'/>
        <div className='send'>
          <img src={send} alt=''/>
          <input type='file' style={{display:"none"}} id='file'/>
          <label htmlFor='file'>
            <img src={file} alt=''/>
          </label>
          <button>Send</button>
        </div>
    </div>
  )
}

export default Input
