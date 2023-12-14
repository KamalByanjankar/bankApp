import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import db, { auth } from '../../context/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

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
  })

  let navigate = useNavigate()

  // const handleRegistration = async (e) => {
  //   e.preventDefault();
  //   if(password === confirmPassword){
  //     //Create an account 
  //     createUserWithEmailAndPassword(auth, email, password).then(
  //       async (userCredentials) => {
  //         // console.log(userCredentials)
  //         try{
  //           const docRef = collection(db, "users")
  //           await addDoc(docRef, {
  //             firstName: firstName,
  //             lastName: lastName,
  //             email: email,
  //             phoneNumber: phoneNumber,
  //             dateOfBirth: dateOfBirth,
  //             password: password,
  //             userId: `${userCredentials.user.uid}`
  //           })
  //           navigate("/")
  //           alert("User create successfully")
  //         }catch(error){
  //           alert("Something went wrong!")
  //         }
  //       }
  //     )
  //   }
  //   else{
  //     alert("Password don't match!")
  //   }
  // }

  return (
    <div className="signup">
      <form className="signup__form">
        <h3>Account Opening Form</h3>
        <div className="horizontal__line"></div>
        <p className="signup__form__header">Personal Information</p>
        <div className="horizontal__line"></div>

        <div>
          <label className="form__label">Full Name <span>*</span></label>
          <input className="form__input" type="text" name="title" value={user.title} onChange={(e) => setUser({title: e.target.value})}/>
          <input className="form__input" type="text" name="firstName" placeholder="First Name"/>
          <input className="form__input" type="text" name="lastName" placeholder="Last Name"/>
        </div>

        <div className="test">
          <div className="dob">
            <label className="form__label">Date of Birth <span>*</span></label>
            <input className="form__input" type="date" name="dob"/>
          </div>  
            
          <div className="maritalStatus">
            <label className="form__label">Marital Status <span>*</span></label>
            <input className="form__input" type="text" name="maritalStatus"/>
          </div>
        </div>

        <div className="test">
          <div className="telephoneNumber">
            <label className="form__label">Telephone Number <span>*</span></label>
            <input className="form__input" type="number" name="telephoneNumber" placeholder="01 234 5678967"/>
          </div>
          <div className="email">
            <label className="form__label">E-mail <span>*</span></label>
            <input className="form__input" type="email" name="email"/>
          </div>
        </div>

        <div>
          <label className="form__label">Mailing Home Address <span>*</span></label>
          <input className="form__input address" type="text" name="streetAddress" placeholder="Street Address"/>          
          <div className="test addressField">
            <input className="form__input" type="text" name="city" placeholder="City"/>
            <input className="form__input" type="text" name="state" placeholder="State"/>
          </div>
          <div className="test addressField">
            <input className="form__input" type="number" name="postalcode" placeholder="Postal / Zip Code"/>
            <input className="form__input" type="text" name="country" placeholder="Country" />
          </div>
        </div>

        <div>
          <label className="form__label">Upload a photo <span>*</span></label>
          <input className="form__input" type="file" name="photo"/>
        </div>

        <div>
          <p className="signup__form__header">Account Information</p>
          <div className="horizontal__line"></div>
          <div>
            <label className="form__label">Account Type <span>*</span></label>
            <input className="form__input accountType" type="text" name="accountType" />
          </div>
        </div>

        <div className="test">
          <div className="accountField">
            <label className="form__label">Occupation <span>*</span></label>
            <input className="form__input" type="text" name="occupation" placeholder="Occupation"/>
          </div>
          <div className="accountField">
            <label className="form__label">Monthly Income <span>*</span></label>
            <input className="form__input" type="number" name="monthlyIncome"/>
          </div>
        </div>

        <input className="signup__formbtn" type="submit" value="Submit"/>
        <p className="link">Already have an account!<Link to="/" >Sign In</Link></p>
      </form>
    </div>
  )
}

export default Signup