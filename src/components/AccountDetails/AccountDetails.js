import React from 'react'
import "./AccountDetails.css"
import { useUserContext } from '../../context/UserProvider'
import { auth } from '../../context/firebase'

function AccountDetails() {
    const { userData } = useUserContext()

  return (
    <div className="accountDetails">
        <h3>Account Details</h3>
        <div className="accountBalance__content">
            <div className="accountBalance__item">
                <label>IBAN</label>
                <span>{userData.data.iban}</span>
            </div>
            <div className="accountBalance__item">
                <label>Account Number</label>
                <span>{userData.data.accountNumber}</span>
            </div>
            <div className="accountBalance__item">
                <label>Account Type</label>
                <span>{userData.data.accountType}</span>
            </div>
            <div className="accountBalance__item">
                <label>Balance</label>
                <span>{userData.data.balance}</span>
            </div>
            <div className="accountBalance__item">
                <label>Member Since</label>
                <span>{(auth.currentUser.metadata.creationTime).split(' ').slice(0, 5).join(' ')}</span>
            </div>
        </div>
    </div>
  )
}

export default AccountDetails