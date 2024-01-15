import React, { createContext, useContext, useEffect, useState } from 'react'
import db from './firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {   
        fetchData()
    }, [])

    const fetchData = async () => { 
        // console.log("Fetching data...")
        const userId = localStorage.getItem("userId")
        const q = query(collection(db, "users"), where("userId", "==", userId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, doc.data())
            setUserData({
                data: doc.data(), 
                id: doc.id
            })
        })
    }

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