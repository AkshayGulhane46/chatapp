import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span> Jpna </span>
        <div className='chatIcons'>
          <img src = "" alt='images'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
