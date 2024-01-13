import React, { useRef } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import db, { auth } from '../../context/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useFormContext } from '../../context/FormProvider'

function Signup() {
  const {
    user,
    handleChange, 
    handleDragOver, 
    handleDrop, 
    onFileChange,
    handleCreateAccount,
    handleStoreImage
  } = useFormContext()

  const refValue = useRef()
  const navigate = useNavigate()

  const handleRegistration = async (e) => {
    e.preventDefault();
    if(user.password === user.confirmPassword && user.photoUrl !== ""){
      try{
      // Create an account 
        createUserWithEmailAndPassword(auth, user.email, user.password).then(
        async (userCredentials) => {
          const docRef = collection(db, "users")
          await addDoc(docRef, {
          title: user.title,
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: user.dateOfBirth,
          maritalStatus: user.maritalStatus,
          phoneNumber: user.phoneNumber,
          email: user.email,
          streetAddress: user.streetAddress,
          city: user.city,
          state: user.state,
          postalCode: user.postalCode,
          country: user.country,
          photoUrl: user.photoUrl,
          occupation: user.occupation,
          monthlyIncome: user.monthlyIncome,
          accountType: user.accountType,
          accountNumber: user.accountNumber,
          iban: user.iban,
          balance: Number(user.balance),
          userId: `${userCredentials.user.uid}`
          })
          alert("User created successfully")
          navigate("/")
        })
      }catch(error){
        alert("Something went wrong!")
      }
    }
    else{
      alert("Password don't match or fill all the required fields")
    }
  }

  return (
    <div className="signup">

      <form className="signup__form" onSubmit={handleRegistration}>
        <h3>Account Opening Form</h3>
        <div className="horizontal__line"></div>
        <p className="signup__form__header">Personal Information</p>
        <div className="horizontal__line"></div>

        <div>
          <label className="form__label" htmlFor="name">Full Name <span>*</span></label>
          <select className="title__dropdown" required name="title" onChange={handleChange}>
            <option value="DEFAULT">Choose</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Prof">Prof</option>
            <option value="Dr">Dr</option>
            <option value="Others">Others</option>
          </select>
          <input className="form__input name" type="text" id="name" required name="firstName" placeholder="First Name" onChange={handleChange}/>
          <input className="form__input name" type="text" required name="lastName" placeholder="Last Name" onChange={handleChange}/>
        </div>

        <div className="form__content">
          <div className="dob">
            <label className="form__label" htmlFor="dob">Date of Birth <span>*</span></label>
            <input className="form__input" type="date" id="dob" required name="dateOfBirth" onChange={handleChange}/>
          </div>  
          <div className="maritalStatus">
            <label className="form__label" htmlFor="maritalStatus">Marital Status <span>*</span></label>
            <select className="dropdown" required name="maritalStatus" onChange={handleChange}>
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
            <input className="form__input name" type="number" id="telephoneNphoneNumberumber" required name="phoneNumber" placeholder="01 234 5678967" onChange={handleChange}/>
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">E-mail <span>*</span></label>
            <input className="form__input name" type="email" id="email" required name="email" placeholder="E-Mail Address" onChange={handleChange}/>
          </div>
        </div>

        <div>
          <label className="form__label">Mailing Home Address <span>*</span></label>
          <input className="form__input address" type="text" required name="streetAddress" placeholder="Street Address" onChange={handleChange}/>          
          <div className="form__content addressField">
            <input className="form__input" type="text" required name="city" placeholder="City" onChange={handleChange}/>
            <input className="form__input" type="text" required name="state" placeholder="State" onChange={handleChange}/>
          </div>
          <div className="form__content addressField">
            <input className="form__input" type="number" required name="postalCode" placeholder="Postal / Zip Code" onChange={handleChange}/>
            <input className="form__input" type="text" required name="country" placeholder="Country" onChange={handleChange}/>
          </div>
        </div>

        <div>
          <label className="form__label">Upload a photo <span>*</span></label>
          <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop} required onClick={() => refValue.current.click()}>
            <p>Drag and Drop Files to Upload</p>
            <p>Or</p>
            <p>Click to upload image</p>
            <input type="file" ref={refValue} name="photo" accept="image/*" onChange={onFileChange} hidden/>
          </div>
          {
            user.photo ? (<img src={URL.createObjectURL(user.photo)} alt="User Profile" width={130} height={150}/>) : ""
          }
          <div>
            <button type="button" onClick={handleStoreImage}>Upload</button>
            <p>Image Uploaded: {user.percent} %</p>
          </div>
        </div>

        <div>
          <p className="signup__form__header">Account Information</p>
          <div className="horizontal__line"></div>
          <div>
            <label className="form__label">Account Type <span>*</span></label>
            <select className="dropdown accountType" required name="accountType" onChange={handleChange}>
              <option value='DEFAULT'>Please select an account type</option>
              <option value="Saving Account">Saving Account</option>
              <option value="Current Account">Current Account</option>
            </select>
          </div>
        </div>

        <div className="form__content">
          <div className="accountField">
            <label className="form__label" htmlFor="occupation">Occupation <span>*</span></label>
            <input className="form__input" type="text" id="occupation" required name="occupation" placeholder="Occupation" onChange={handleChange}/>
          </div>
          <div className="accountField">
            <label className="form__label" htmlFor="monthlyIncome">Monthly Income <span>*</span></label>
            <input className="form__input" type="number" id="monthlyIncome" required name="monthlyIncome" placeholder="Monthly Income" onChange={handleChange}/>
          </div>
        </div>

        <div className="form__content">
          <div className="password">
            <label className="form__label" htmlFor="password">Password <span>*</span></label>
            <input className="form__input name" type="password" id="password" required name="password" onChange={handleChange}/>
          </div>
          <div className="confirmPassword">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password <span>*</span></label>
            <input className="form__input name" type="password" id="confirmPassword" required name="confirmPassword" onChange={handleChange}/>
          </div>
        </div>

        <input className="signup__formbtn" type="submit" value="Submit" onClick={handleCreateAccount} />
        <p className="link">Already have an account!<Link to="/" >Sign In</Link></p>
      </form>
    </div>
  )
}

export default Signup