import React from 'react';
import down from '../../images/down.svg'

function Recepient() {
  const iconstyle = 'h-8 p-2 hover:cursor-pointer'
  return (
    <div className=" flex w-1/2 p-1 gap-3">
      <p className=" flex rounded-lg w-96 bg-gray-300 p-3">hey how are you <img className={iconstyle} src={down} alt="down" /></p>
    </div>
  );
}

export default Recepient;
