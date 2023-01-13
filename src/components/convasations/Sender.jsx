import React from 'react';
import down from '../../images/down.svg'
import './sender.css'

function Sender() {
  const iconstyle = 'h-8 p-2  dropd'
  return (
    <div className=" pl-3 gap-3">
      <p className="w-96 flex rounded-lg bg-gray-300 p-3"> this morni are you okay <img className={iconstyle} src={down} alt="down" /></p>
    </div>
  );
}

export default Sender;
