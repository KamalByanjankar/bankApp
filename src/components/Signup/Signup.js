import React, { useState } from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegistration = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      alert("Password don't match")
    }
  }

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={handleRegistration}>
        <h3>Register</h3>
        <div>
          <label className='form__label'> First Name</label>
          <input className='form__input' type='text' name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
          <label className='form__label'>Last Name</label>
          <input className='form__input' type='text' name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div>
          <label className='form__label'>Email</label>
          <input className='form__input' type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label className='form__label'>Phone Number</label>
          <input className='form__input' type="number" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label className='form__label'>Date of Birth</label>
          <input className='form__input' type="date" name="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </div>
        <div>
          <label className='form__label'>Password</label>
          <input className='form__input' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label className='form__label'>Confirm Password</label>
          <input className='form__input' type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <input type="submit" value="Register" className="signup__formbtn" />
        <p>Already have an account! <Link to="/">Sign In</Link></p>
      </form>
    </div>
  )
}

export default Signup