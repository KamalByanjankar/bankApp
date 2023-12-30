import React, { createContext, useContext, useState } from 'react'
import db, { auth } from './firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([])

    const fetchData = async () => { 
        // console.log("Fetching data...")
        const userId = auth.currentUser.uid;
        const q = query(collection(db, "users"), where("userId", "==", userId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, doc.data())
            setUserData(doc.data())
        })
    }

    // console.log("from user context", userData)

    const value = {
        userData, fetchData
    }

    return(
        <UserContext.Provider value={ value }>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)