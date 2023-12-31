import { useState } from 'react'
import './style.css'
import { useNavigate, Link } from 'react-router-dom'
import { auth, storage, db } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    }
    catch (err) {
      setErr(true)
    }
  }
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input style={{ display:'none' }} type="file" id='file'/>
            <button>Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>You do have an account ? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login