import React from 'react'
import "./SubHeader.css"
import Logout from "../Logout/Logout"
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../context/UserProvider'
import { auth } from '../../context/firebase'

function SubHeader() {
    const {userData} = useUserContext()
 
    const lastLogin = () => {
        let dateString = auth.currentUser.metadata.lastSignInTime;
        dateString = dateString.split(' ').slice(0, 5).join(' ');
        return (dateString);
    }


  return (
    <div className="subHeader">
        <div className="subHeader__content">
            <div>
                <p>Welcome, <span className="subHeader__username">{userData.data.firstName} {userData.data.lastName}</span></p>
                <p className="login__info">Last login: {lastLogin()}</p>
            </div>
            <div>
                <Logout />
            </div>
        </div>
        <nav className="navbar__navigation">
            <ul>
                <li>
                    <NavLink to="/dashboard" className={({isActive}) => (isActive ? "active__style" : null)}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/transfer" className={({isActive}) => (isActive ? "active__style" : null)}>Transfer</NavLink>
                </li>
                <li>
                    <NavLink to="/transactions" className={({isActive}) => (isActive ? "active__style" : null)}>Transactions</NavLink>
                </li>
                <li>
                    <NavLink to="#">Setting</NavLink>
                    <div className="dropdown__content">
                        <NavLink to="/profile" className={({isActive}) => (isActive ? "active__style" : null)}>Profile</NavLink>
                        <NavLink to="/card-information" className={({isActive}) => (isActive ? "active__style" : null)}>Card Information</NavLink>
                        <NavLink><Logout/></NavLink>
                    </div>
                </li>
            </ul>
        </nav>
                
        <div className="subHeader__empty"></div>      
    </div>
    )
}

export default SubHeader