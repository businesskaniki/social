import React from 'react'
import Chatsection from './chatbox/chatsection/Chatsection'
import Chatnav from './chatNav/Chatnav'
import Chats from './chats/Chats'
import Allchats from './convasations/Allchats'
import Nav from './nav/Nav'
import './layout.css'

function Layout() {
  return (
    <div className='bg-gray-700 h-full flex cont'>
       <div className="pt-3 pb-3 pl-3 border-r border-gray-700 w-3/7 overflow-x-hidden relative">
         <div className="absolute inset-x-0 top-0">
           <Nav />
         </div>
         <div>
           <Chats />
         </div>
       </div>
       <div className="pt-3 w-3/6 bg-gray-700 border-r border-gray-100 chatcontainer relative">
         <div className="absolute inset-x-0 top-0">
           <Chatnav />
         </div>
         <div className="overflow-scroll">
           <Allchats />
         </div>
         <div className="absolute inset-x-0 bottom-0 pb-1">
         <Chatsection />
         </div>
       </div>
    </div>
  )
}

export default Layout