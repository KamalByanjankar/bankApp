import React from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../context/firebase'
import { useFormContext } from '../../context/FormProvider'
import { useUserContext } from '../../context/UserProvider'

function Signin() {
  const { user, handleChange } = useFormContext()
  const {fetchData} = useUserContext()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    // Sign In using firebase
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((result) => {
      localStorage.setItem("authenticated", true)
      localStorage.setItem("userId", auth.currentUser.uid)
      fetchData()
      setTimeout(() => {
        navigate("/dashboard")
      }, 1500)
    })
    .catch((error) => {
      alert("Invalid username or password!")
    })
  }

  return (
    <div className="signin">
     <form className="sigin__form" onSubmit={handleLogin} >
        <h3>Sign In</h3>
        <label>
          Username
          <input type="email" name="email" onChange={handleChange}/>
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange}/>
        </label>
        <div className="signin__formbtn__contents">
          <input type="submit" value="Log in" disabled={!user.email || !user.password} className="signin__formbtn"/>
          <p>Don't have an account! <Link to="/signup">Register</Link></p>
        </div>
      </form>       
    </div>
  )
}

export default Signin