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
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    photoUrl: "",
    accountType: "",
    occupation: "",
    monthlyIncome: "",
    passowrd: "",
    confirmPassword: ""
  })


  const refValue = useRef()
  let navigate = useNavigate()

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if(file){
      setUser({photoUrl: URL.createObjectURL(file)})
    }
  }

  const onFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      setUser({photoUrl: URL.createObjectURL(file)})
    }
  }

  console.log(user.firstName)
  return (
    <div className="signup">
      <form className="signup__form">
        <h3>Account Opening Form</h3>
        <div className="horizontal__line"></div>
        <p className="signup__form__header">Personal Information</p>
        <div className="horizontal__line"></div>

        <div>
          <label className="form__label" htmlFor="name">Full Name <span>*</span></label>
          <select className="title__dropdown">
            <option disabled selected>Choose</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Prof">Prof</option>
            <option value="Dr">Dr</option>
            <option value="Others">Others</option>
          </select>
          <input className="form__input name" type="text" id="name" name="firstName" placeholder="First Name" onChange={(e) => setUser({firstName: e.target.value})}/>
          <input className="form__input name" type="text" name="lastName" placeholder="Last Name"/>
        </div>

        <div className="form__content">
          <div className="dob">
            <label className="form__label" htmlFor="dob">Date of Birth <span>*</span></label>
            <input className="form__input" type="date" id="dob" name="dob"/>
          </div>  
          <div className="maritalStatus">
            <label className="form__label" htmlFor="maritalStatus">Marital Status <span>*</span></label>
            {/* <input className="form__input" id="maritalStatus" type="text" name="maritalStatus"/> */}
            <select className="dropdown">
              <option selected disabled>Please select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
        </div>

        <div className="form__content">
          <div className="telephoneNumber">
            <label className="form__label" htmlFor="telephoneNumber">Telephone Number <span>*</span></label>
            <input className="form__input name" type="number" id="telephoneNumber" name="telephoneNumber" placeholder="01 234 5678967"/>
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">E-mail <span>*</span></label>
            <input className="form__input name" type="email" id="email" name="email" placeholder="E-Mail Address"/>
          </div>
        </div>

        <div>
          <label className="form__label" htmlFor="streetAddress">Mailing Home Address <span>*</span></label>
          <input className="form__input address" type="text" id="streetAddress" name="streetAddress" placeholder="Street Address"/>          
          <div className="form__content addressField">
            <input className="form__input" type="text" name="city" placeholder="City"/>
            <input className="form__input" type="text" name="state" placeholder="State"/>
          </div>
          <div className="form__content addressField">
            <input className="form__input" type="number" name="postalcode" placeholder="Postal / Zip Code"/>
            <input className="form__input" type="text" name="country" placeholder="Country" />
          </div>
        </div>

        <div>
          <label className="form__label">Upload a photo <span>*</span></label>
          <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => refValue.current.click()}>
            <p>Drag and Drop Files to Upload</p>
            <p>Or</p>
            <p>Click to upload image</p>
            <input type="file" name="photoUrl" ref={refValue} onChange={onFileChange} hidden/>
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
            {/* <input className="form__input accountType" type="text" name="accountType" /> */}
            <select className="dropdown accountType">
              <option selected disabled>Please select an account type</option>
              <option value="saving">Saving Account</option>
              <option value="current">Current Account</option>
            </select>
          </div>
        </div>

        <div className="form__content">
          <div className="accountField">
            <label className="form__label" htmlFor="occupation">Occupation <span>*</span></label>
            <input className="form__input" type="text" id="occupation" name="occupation" placeholder="Occupation"/>
          </div>
          <div className="accountField">
            <label className="form__label" htmlFor="monthlyIncome">Monthly Income <span>*</span></label>
            <input className="form__input" type="number" id="monthlyIncome" name="monthlyIncome" placeholder="Monthly Income"/>
          </div>
        </div>

        <div className="form__content">
          <div className="password">
            <label className="form__label" htmlFor="password">Password <span>*</span></label>
            <input className="form__input name" type="password" id="password" name="password"/>
          </div>
          <div className="confirmPassword">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password <span>*</span></label>
            <input className="form__input name" type="password" id="confirmPassword" name="confirmPassword" />
          </div>
        </div>

        <input className="signup__formbtn" type="submit" value="Submit"/>
        <p className="link">Already have an account!<Link to="/" >Sign In</Link></p>
      </form>
    </div>
  )
}

export default Signup