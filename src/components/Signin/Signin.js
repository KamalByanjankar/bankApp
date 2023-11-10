import React, { useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

function Signin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //Sign In using firebase
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredentials) => {
      console.log(userCredentials)

      setUsername("")
      setPassword("")
    })
    .catch((error) => {
      alert(error)
    })
  }

  return (
    <div className="signin">
     <form className="sigin__form" onSubmit={handleFormSubmit}>
        <h3>Sign In</h3>
        <label>
          Username
          <input type="email" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Log in" disabled={!username || !password} className="signin__formbtn"/>
        <p>Don't have an account! <Link to="/signup">Register</Link></p>
      </form>       
    </div>
  )
}

export default Signin