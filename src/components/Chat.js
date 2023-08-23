import React from 'react'
import Messages from './Messages'
import Input from './Input'
import camera from '../img/camera.png'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span> Jpna </span>
        <div className='chatIcons'>
          <img src = {camera} alt='images'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
