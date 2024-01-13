import React, { createContext, useContext, useState } from 'react'
import { generateAccountNumber, generateIban } from '../components/Util/generateAccountNumber'
import { signOut } from 'firebase/auth'
import { auth, storage } from './firebase'
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'

export const FormContext = createContext(null)

export const FormProvider = ({ children }) => {
    const [user, setUser] = useState({
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        maritalStatus: "",
        phoneNumber: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        photo: "",
        photoUrl: "",
        accountType: "",
        occupation: "",
        monthlyIncome: "",
        password: "",
        confirmPassword: "",
        accountNumber: "",
        iban: "",
        balance: Number("50.00"),
        disable: true,
        percent: "0"
    })

    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("authenticated")
            localStorage.removeItem("userId")
            window.location = "/"
        }).catch((error) => {
            alert("Problem occured during log out!")
        })
    }

    const handleFormEditButton = (e) => {
        setUser({
            ...user,
            disable: !user.disable
        })
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }
    
    const handleDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if(file){
            setUser({
            ...user, 
            [e.target.name]: file
            })
        }
    }

    const onFileChange = (e) => {
        const file = e.target.files[0]
        if(file){
            setUser({
            ...user,
            [e.target.name]: file
            // photoUrl: URL.createObjectURL(file)
            })
        }
    }

    const handleCreateAccount = () => {
        // Generate account number
        const generatedAccountNumber = generateAccountNumber(user.accountType)
        const generatedIban = generateIban(generatedAccountNumber)
        // console.log(generatedAccountNumber, generatedIban)
        setUser({
          ...user,
          accountNumber: generatedAccountNumber,
          iban: generatedIban.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
        })
    }

    const handleStoreImage = () => {
        if (!user.photo) {
            alert("Please upload an image first!");
            return;
        }
        
        if(user.accountType !== ""){
            const storageRef = ref(storage, `/Images/${user.photo.name}`);
            const uploadTask = uploadBytesResumable(storageRef, user.photo);
            uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
        
                // update progress
                setUser({
                    ...user,
                    percent: percent
                })
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((imageUrl) => {
                        // console.log(imageUrl)
                        setUser({
                            ...user,
                            photoUrl: imageUrl
                        })
                    })
                }
            )
        }
        else{
            alert("Fill up the required form")
        }
        
    }

    const value = {
        user, setUser, handleChange, handleDragOver, 
        handleDrop, onFileChange, handleCreateAccount, handleLogout, 
        handleFormEditButton, handleStoreImage
    }

    return(
        <FormContext.Provider value={ value }>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => useContext(FormContext)