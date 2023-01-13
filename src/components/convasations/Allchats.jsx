import React from 'react';
import Recepient from './Recepient';
import Sender from './Sender';

function Allchats() {
  return (
    <div className="pt-12 overflow-scroll">
       <div className=" break-all">
         <Recepient />
         <Recepient />
       </div>
       <div className="justify-start items-end flex flex-row-reverse break-all">
        <Sender /> 
       </div>
       <div className="break-all" >
         <Recepient />
       </div>
       <div className="justify-start items-end flex flex-row-reverse break-all pb-1">
        <Sender /> 
       </div>
       <div className="justify-start items-end flex flex-row-reverse break-all pb-1">
        <Sender /> 
       </div>
       <div className="break-all" >
         <Recepient />
       </div>
       <div className="justify-start items-end flex flex-row-reverse break-all pb-1">
        <Sender /> 
       </div>
       <div className="justify-start items-end flex flex-row-reverse break-all pb-1">
        <Sender /> 
       </div>
       <div className="break-all" >
         <Recepient />
       </div>
       <div className="break-all" >
         <Recepient />
       </div>
    </div>
  );
}

export default Allchats;
