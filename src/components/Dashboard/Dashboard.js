import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()

    const logoutBtnHandler = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("authenticated")
            navigate("/")
            console.log("User Signed out successfully!")
        }).catch((error) => {
            console.log("Problem occured during log out!")
        })
    }

    return (
        <div className="dashboard">
            <p>Welcome to the Bank!</p>
            <button onClick={logoutBtnHandler}>Log out</button>
        </div>
    )
}

export default Dashboard