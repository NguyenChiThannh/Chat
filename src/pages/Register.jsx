import './style.css'
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate, Link } from 'react-router-dom'
function Register() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, userName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user, {
              userName,
              photoURL: downloadURL
            })
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL
            })

            await setDoc(doc(db, 'userChats', res.user.id), {})
            navigate('/')
          })
        }
      )
    }
    catch (err) {
      setErr(true)
    }
  }


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <input style={{ display:'none' }} type="file" id='file'/>
          <label htmlFor="file">
            <AddPhotoAlternateRoundedIcon sx={{ color:'#a7bcff' }}/>
            <span>Add a avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account ? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register