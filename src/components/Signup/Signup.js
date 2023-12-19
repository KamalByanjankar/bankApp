import React, { useRef, useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [user, setUser] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    maritalStatus: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    photoUrl: "",
    accountType: "",
    occupation: "",
    monthlyIncome: "",
    password: "",
    confirmPassword: ""
  })

  const refValue = useRef()
  let navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if(file){
      // setUser({photoUrl: URL.createObjectURL(file)})
      setUser({
        ...user, 
        photoUrl: URL.createObjectURL(file)
      })
    }
  }

  const onFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      setUser({
        ...user, 
        photoUrl: URL.createObjectURL(file)
      })
    }
  }

  return (
    <div className="signup">
      <form className="signup__form">
        <h3>Account Opening Form</h3>
        <div className="horizontal__line"></div>
        <p className="signup__form__header">Personal Information</p>
        <div className="horizontal__line"></div>

        <div>
          <label className="form__label" htmlFor="name">Full Name <span>*</span></label>
          <select className="title__dropdown" required name="title" value={user.title} onChange={handleChange}>
            <option value="DEFAULT">Choose</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Prof">Prof</option>
            <option value="Dr">Dr</option>
            <option value="Others">Others</option>
          </select>
          <input className="form__input name" type="text" id="name" required name="firstName" value={user.firstName} placeholder="First Name" onChange={handleChange}/>
          <input className="form__input name" type="text" required name="lastName" value={user.lastName} placeholder="Last Name" onChange={handleChange}/>
        </div>

        <div className="form__content">
          <div className="dob">
            <label className="form__label" htmlFor="dob">Date of Birth <span>*</span></label>
            <input className="form__input" type="date" id="dob" required name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange}/>
          </div>  
          <div className="maritalStatus">
            <label className="form__label" htmlFor="maritalStatus">Marital Status <span>*</span></label>
            <select className="dropdown" required name="maritalStatus" value={user.maritalStatus} onChange={handleChange}>
              <option value="DEFAULT">Please select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
        </div>

        <div className="form__content">
          <div className="telephoneNumber">
            <label className="form__label" htmlFor="phoneNumber">Telephone Number <span>*</span></label>
            <input className="form__input name" type="number" id="telephoneNphoneNumberumber" required name="phoneNumber" value={user.phoneNumber} placeholder="01 234 5678967" onChange={handleChange}/>
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">E-mail <span>*</span></label>
            <input className="form__input name" type="email" id="email" required name="email" value={user.email} placeholder="E-Mail Address" onChange={handleChange}/>
          </div>
        </div>

        <div>
          <label className="form__label">Mailing Home Address <span>*</span></label>
          <input className="form__input address" type="text" required name="streetAddress" value={user.streetAddress} placeholder="Street Address" onChange={handleChange}/>          
          <div className="form__content addressField">
            <input className="form__input" type="text" required name="city" value={user.city} placeholder="City" onChange={handleChange}/>
            <input className="form__input" type="text" required name="state" value={user.state} placeholder="State" onChange={handleChange}/>
          </div>
          <div className="form__content addressField">
            <input className="form__input" type="number" required name="postalCode" value={user.postalCode} placeholder="Postal / Zip Code" onChange={handleChange}/>
            <input className="form__input" type="text" required name="country" value={user.country} placeholder="Country" onChange={handleChange}/>
          </div>
        </div>

        <div>
          <label className="form__label">Upload a photo <span>*</span></label>
          <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => refValue.current.click()}>
            <p>Drag and Drop Files to Upload</p>
            <p>Or</p>
            <p>Click to upload image</p>
            <input type="file" ref={refValue} name="photoUrl" onChange={onFileChange} required hidden/>
          </div>
          {
            user.photoUrl ? (<img src={user.photoUrl} alt="User Profile" width={120} height={150}/>) : ""
          }
        </div>

        <div>
          <p className="signup__form__header">Account Information</p>
          <div className="horizontal__line"></div>
          <div>
            <label className="form__label">Account Type <span>*</span></label>
            <select className="dropdown accountType" required name="accountType" value={user.accountType} onChange={handleChange}>
              <option value='DEFAULT'>Please select an account type</option>
              <option value="Saving Account">Saving Account</option>
              <option value="Current Account">Current Account</option>
            </select>
          </div>
        </div>

        <div className="form__content">
          <div className="accountField">
            <label className="form__label" htmlFor="occupation">Occupation <span>*</span></label>
            <input className="form__input" type="text" id="occupation" required name="occupation" value={user.occupation} placeholder="Occupation" onChange={handleChange}/>
          </div>
          <div className="accountField">
            <label className="form__label" htmlFor="monthlyIncome">Monthly Income <span>*</span></label>
            <input className="form__input" type="number" id="monthlyIncome" required name="monthlyIncome" value={user.monthlyIncome} placeholder="Monthly Income" onChange={handleChange}/>
          </div>
        </div>

        <div className="form__content">
          <div className="password">
            <label className="form__label" htmlFor="password">Password <span>*</span></label>
            <input className="form__input name" type="password" id="password" required name="password" value={user.password} onChange={handleChange}/>
          </div>
          <div className="confirmPassword">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password <span>*</span></label>
            <input className="form__input name" type="password" id="confirmPassword" required name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
          </div>
        </div>

        <input className="signup__formbtn" type="submit" value="Submit"/>
        <p className="link">Already have an account!<Link to="/" >Sign In</Link></p>
      </form>
    </div>
  )
}

export default Signup