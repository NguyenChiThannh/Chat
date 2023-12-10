import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className="user">
        <div style={{ display:'flex', alignItems:'center', gap: '8px' }}>
          <img src={currentUser.photoURL} alt="" />
          <span>{currentUser.displayName}</span>
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar