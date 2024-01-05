import React from 'react'
import "./AccountBalance.css"
import { useUserContext } from '../../context/UserProvider'

function AccountBalance() {
    const {userData} = useUserContext()

  return (
    <div className="accountBalance">
        <h3>Account Balance</h3>
        <div className="accountBalance__content">
            <div className="accountBalance__item">
                <label>Account</label>
                <span>{userData.data.iban}</span>
            </div>
            <div className="accountBalance__item">
                <label>Balance</label>
                <span>{userData.data.balance} €</span>
            </div>
            <div className="accountBalance__item">
                <label>Authorized</label>
                <span>{userData.data.balance} €</span>
            </div>
        </div>
    </div>
  )
}

export default AccountBalance