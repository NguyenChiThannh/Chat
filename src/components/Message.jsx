import React from 'react'

function Message() {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src="https://images.unsplash.com/photo-1701453031915-60f4fc287f4d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Message