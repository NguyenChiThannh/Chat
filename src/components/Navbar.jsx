import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.userName}</span>
      </div>
      <button onClick={() => signOut(auth)}>Logout</button>

    </div>
  )
}

export default Navbar