import React from 'react'
import "./SubHeader.css"
import Logout from "../Logout/Logout"
import { NavLink } from 'react-router-dom'

function SubHeader() {
  return (
    <div>
        <div className="subHeader">
            <p>Welcome, username!</p>
            <div>
                <p>Last login:</p>
                <Logout />
            </div>
            
        </div>
        <nav className="navbar__navigation">
            <ul>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/transfer">Transfer</NavLink>
                </li>
                <li>Transactions</li>
                <li>Account Details</li>
                <li>Card Details</li>
                <li>Personal Information</li>
            </ul>
        </nav>
        <div className="subHeader__empty"></div>
    </div>
  )
}

export default SubHeader