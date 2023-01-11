import React from 'react'
import Chats from './chats/Chats'
import Nav from './nav/Nav'

function Layout() {
  return (
    <div className='bg-gray-700 h-full '>
       <div className="p-3 border-r border-gray-700 w-full overflow-x-hidden">
         <Nav />
         <Chats />
       </div>
    </div>
  )
}

export default Layout