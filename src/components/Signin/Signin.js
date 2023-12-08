import React, { useState } from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signin">
     <form className="sigin__form" onSubmit={handleFormSubmit}>
        <h3>Sign In</h3>
        <label>
          Username
          <input type="email" name="username" onChange={(e) => setUsername(e.target.value)}/>
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