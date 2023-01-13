import React from 'react';
import menu from '../../images/menu.svg';
import search from '../../images/search.svg'

function Chatnav() {
  const iconstyle = 'h-8 p-2 hover:cursor-pointer';
  return (
    <div className="pt-2 bg-gray-300 h-14 text-gray-900 flex items-center justify-between">
      <div className="w-20 prof flex items-center justify-center pl-8 gap-4">
        <img className="h-14" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a2hZYHeQkS4yQnshKlfQ5QHaEo%26pid%3DApi&f=1&ipt=4da8e9d2c2428f73a74f280e87bd2fbbd7388c6fd0149226b923c8ca5c66ff61&ipo=images" alt="profile" />
        <p className="">Nickie</p>
      </div>
      <div className="flex pr-8">
        <img  className={iconstyle} src={menu} alt="menu" />
        <img  className={iconstyle} src={search} alt="menu" />
      </div>
    </div>
  )
}

export default Chatnav;
