import React from 'react'
import './Logout.css'
import { useFormContext } from '../../context/FormProvider'

function Logout() {
    const { handleLogout } = useFormContext()

  return (
    <div className="logout">
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Logout