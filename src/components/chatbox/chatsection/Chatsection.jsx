import React from 'react'
import Form from '../form'
import emoji from '../../../images/emoji.svg'
import attach from '../../../images/attach.svg'
import mic from '../../../images/mic.svg'
import './chatsection.css'

function Chatsection() {
  const iconstyle = 'h-8 p-2 hover:cursor-pointer'
  return (
    <div className="flex w-full items-center bg-zinc-400 chat">
        <div className="flex items-center justify-center p-3">
            <img  className={iconstyle} src={emoji} alt="menu" />
            <img  className={iconstyle} src={attach} alt="menu" />
        </div>
        <Form />
          <img  className={iconstyle} src={mic} alt="menu" />
    </div>
  )
}

export default Chatsection