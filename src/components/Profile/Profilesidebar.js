import React from 'react'
import "./Profilesidebar.css"
import { useUserContext } from '../../context/UserProvider'

function Profilesidebar() {
  const { userData } = useUserContext()

  return (
    <div className="informationsidebar">
      <img className="profile__image" src={userData.data.photoUrl} alt="User"/>
      <div className="informationsidebar__profile">
        <p><span className="details">Name:</span><span> {userData.data.title}</span> {userData.data.firstName} {userData.data.lastName}</p>
        <p><span className="details">Date of Birth:</span> {userData.data.dateOfBirth}</p>
        <p><span className="details">Marital Status:</span> {userData.data.maritalStatus}</p>
        <p><span className="details">Telephone Number:</span> {userData.data.phoneNumber}</p>
        <p><span className="details">Email:</span> {userData.data.email}</p>
        <p><span className="details">Address:</span> {userData.data.streetAddress}, {userData.data.city}, {userData.data.state}, {userData.data.postalCode}, {userData.data.country}</p>
        <p><span className="details">Account Type:</span> {userData.data.accountType}</p>
        <p><span className="details">Occupation:</span> {userData.data.occupation}</p>
        <p><span className="details">Monthly Income:</span> {userData.data.monthlyIncome} €</p>
      </div>
    </div>
  )
}

export default Profilesidebar