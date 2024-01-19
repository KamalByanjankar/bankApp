import React, { useState } from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../context/firebase'
import { useFormContext } from '../../context/FormProvider'
import { useUserContext } from '../../context/UserProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Signin() {
  const { user, handleChange } = useFormContext()
  const {fetchData} = useUserContext()
  const navigate = useNavigate()
  const [ showPassword, setShowPassword ] = useState(false)

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

  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className="signin">
     <form className="signin__form" onSubmit={handleLogin} >
        <h3>Sign In</h3>
        <div className="signin__form__contents">
          <label>Username</label>
          <input type="email" name="email" onChange={handleChange}/>
        </div>

        <div className="signin__form__contents">
          <label>Password</label>      
          <input type={showPassword ? "text" : "password"} name="password" onChange={handleChange}/>
          <span className="fa__icons" onClick={handleShowPassword}>
            {
              showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                  )
                }
          </span>
        </div>
        
        <div className="signin__formbtn__contents">
          <input type="submit" value="Log in" disabled={!user.email || !user.password} className="signin__formbtn"/>
        </div>
        <div className="signin__form__footer">
          <p>Don't have an account! <Link to="/signup">Register</Link></p>
          {/* <p>Forgot Password? Reset your password</p> */}
        </div>
      </form>       
    </div>
  )
}

export default Signin