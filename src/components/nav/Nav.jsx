import React from 'react';
import "./nav.css";
import menu from "../../images/menu.svg";
import bell from "../../images/bell.svg";
import status from "../../images/status.svg";
import message from "../../images/message.svg";

const Nav = () => {
  const iconstyle = 'h-8 p-2 hover:cursor-pointer';
  return (
    <div className="bg-gray-300 flex w-full p-2 h-14 flex justify-between">
      <div className="w-20 prof flex items-center justify-center">
        <img className="h-14" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a2hZYHeQkS4yQnshKlfQ5QHaEo%26pid%3DApi&f=1&ipt=4da8e9d2c2428f73a74f280e87bd2fbbd7388c6fd0149226b923c8ca5c66ff61&ipo=images" alt="profile" />
      </div>
      <div className='w-80 flex justify-start items-center gap-3 flex-row-reverse'>
        <img  className={iconstyle} src={menu} alt="menu" />
        <img className={iconstyle} src={bell} alt="menu" />
        <img className={iconstyle} src={status} alt="menu" />
        <img className={iconstyle} src={message} alt="menu" />
      </div>
    </div>
  );
}

export default Nav;
