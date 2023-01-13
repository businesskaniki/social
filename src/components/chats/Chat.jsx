import React from 'react';
import "./chat.css"
import circle from "../../images/circle.svg";
import down from "../../images/down.svg";
import check from "../../images/check.svg";


function Chat() {
  const iconstyle = 'h-8 p-2 hover:cursor-pointer';
  return (
    <div  className=' text-white h-16 w-100 bg-gray-800 p-2 flex items-center hover:bg-gray-600 cursor-pointer'>
      <div className="w-20 prof flex items-center justify-center">
        <img className="h-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a2hZYHeQkS4yQnshKlfQ5QHaEo%26pid%3DApi&f=1&ipt=4da8e9d2c2428f73a74f280e87bd2fbbd7388c6fd0149226b923c8ca5c66ff61&ipo=images" alt="profile" />
      </div>
      <div className='w-72 border-b border-gray-700 pr-3'>
        <div className='w-100 flex justify-between items-center'>
            <h5>Nicholas</h5>
            <small>12:30 pm</small>
        </div>
        <div className="flex">
            <p className=' flex items-center truncate'><img className="h-4 pr-2 text-red-300" src={check} alt="" /> hey there i am using  whatsap hey there i am using  whatsap</p>
            <div className=' flex hidden hover:visible '>
              <img className={iconstyle} src={circle} alt="circle" />
              <img className={iconstyle} src={down} alt="circle" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
