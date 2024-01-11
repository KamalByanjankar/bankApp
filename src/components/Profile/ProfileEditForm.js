import React, { useState } from 'react'
import "./ProfileEditForm.css"
import { useUserContext } from '../../context/UserProvider'
import { useFormContext } from '../../context/FormProvider'
import { doc, updateDoc } from 'firebase/firestore'
import db from '../../context/firebase'

function ProfileEditForm() {
  const { user, handleFormEditButton } = useFormContext()
  const { userData } = useUserContext()
  const [updatedUser, setUpdatedUser] = useState({
    firstName: (userData.data.firstName),
    lastName: (userData.data.lastName),
    dateOfBirth: (userData.data.dateOfBirth),
    maritalStatus: (userData.data.maritalStatus),
    phoneNumber: (userData.data.phoneNumber),
    email: (userData.data.email),
    streetAddress: (userData.data.streetAddress),
    city: (userData.data.city),
    state: (userData.data.state),
    postalCode: (userData.data.postalCode),
    country: (userData.data.country),
    occupation: (userData.data.occupation),
    monthlyIncome: (userData.data.monthlyIncome),
  })

  const handleFormUpdate = async (e) => {
    e.preventDefault();
    try{
      await updateDoc(doc(db, "users", userData.id), {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        maritalStatus: updatedUser.maritalStatus,
        phoneNumber: updatedUser.phoneNumber,
        streetAddress: updatedUser.streetAddress,
        city: updatedUser.city,
        state: updatedUser.state,
        postalCode: updatedUser.postalCode,
        country: updatedUser.country,
        occupation: updatedUser.occupation,
        monthlyIncome: updatedUser.monthlyIncome,
      })
      alert("User Information updated successfully!")
    }
    catch(error){
      alert("Error while updating!")
    }
  }

  const handleUpdate = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="profileEdit__form">
      <form onSubmit={handleFormUpdate}>
        <div className="profileForm__title">
          <div className="profileForm__group title">
            <label>Salulation</label>
            <input value= {userData.data.title} readOnly/>
          </div>
          <div className="profileForm__group">
            <label>First Name</label>
            <input type="text" name="firstName" value={updatedUser.firstName} disabled={user.disable} onChange={handleUpdate}/>
          </div>
          <div className="profileForm__group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={updatedUser.lastName} disabled={user.disable} onChange={handleUpdate}/>
          </div>
        </div>

        <div className="profileForm__title">
          <div className="profileForm__group form__contents">
            <label>Date of Birth</label>
            <input className="test" type="date" name="dateOfBirth" value={updatedUser.dateOfBirth} readOnly/>
          </div>
          <div className="profileForm__group form__contents">
            <label>Marital Status</label>
            <select className="profileForm__status" name="maritalStatus" value={updatedUser.maritalStatus} disabled={user.disable} onChange={handleUpdate}>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
        </div>

        <div className="profileForm__title">
          <div className="profileForm__group form__contents">
            <label>Telephone Number</label>
            <input type="number" name="phoneNumber" value={updatedUser.phoneNumber} disabled={user.disable} onChange={handleUpdate}/>
          </div>
          <div className="profileForm__group form__contents">
            <label>E-mail</label>
            <input type="email" name="email" value={updatedUser.email} readOnly/>
          </div>
        </div>

        <div>
          <div className="profileForm__group">
            <label>Mailing Home Address</label>
            <input type="text" name="streetAddress" value={updatedUser.streetAddress} disabled={user.disable} onChange={handleUpdate}/>
          </div>
          <div className="profileForm__title">
            <div className="profileForm__group form__contents">
              <label>City</label>
              <input type="text" name="city" value={updatedUser.city} disabled={user.disable} onChange={handleUpdate}/>
            </div>
            <div className="profileForm__group form__contents">
              <label>State</label>
              <input type="text" name="state" value={updatedUser.state} disabled={user.disable} onChange={handleUpdate}/>
            </div>
          </div>
          <div className="profileForm__title">
            <div className="profileForm__group form__contents">
              <label>Postal / Zip Code</label>
              <input type="number" name="postalCode" value={updatedUser.postalCode} disabled={user.disable} onChange={handleUpdate}/>
            </div>
            <div className="profileForm__group form__contents">
              <label>Country</label>
              <input type="text" name="country" value={updatedUser.country} disabled={user.disable} onChange={handleUpdate}/>
            </div>
          </div>
        </div>
        
        <div className="profileForm__title">
          <div className="profileForm__group form__contents">
            <label>Occupation</label>
            <input type="text" name="occupation" value={updatedUser.occupation} disabled={user.disable} onChange={handleUpdate}/>
          </div>
          <div className="profileForm__group form__contents">
            <label>Monthly Income</label>
            <input type="number" name="monthlyIncome" value={updatedUser.monthlyIncome} disabled={user.disable} onChange={handleUpdate}/>
          </div>
        </div>
      </form>

      <div className="profileForm__btn">
        <button className="edit__btn" onClick={handleFormEditButton}>Edit</button>
        <button className="edit__btn" onClick={handleFormUpdate}>Update</button>
      </div>
    </div>
  )
}

export default ProfileEditForm