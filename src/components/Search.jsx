import React, { useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

function Search() {
  const [userName, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('userName', '==', userName)
    )
    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    }
    catch (err) {
      setErr(true)
      console.log("loi")
    }

  }

  const handleKey = e => {
    e.code === 'Enter' && handleSearch()
    console.log(e.code)
  }
  const handleSelect = ()=>{

  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'
          onKeyDown={handleKey}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      {err && <span>User not found</span>}
      {user &&
      <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.userName}</span>
        </div>
      </div>
      }
    </div>
  )
}

export default Search