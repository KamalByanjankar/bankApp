import React from 'react'
import './Dashboard.css'
import SubHeader from '../SubHeader/SubHeader'
import Services from '../Services/Services'
import AccountBalance from '../AccountBalance/AccountBalance'
import { useUserContext } from '../../context/UserProvider'

function Dashboard() {
    const { userData } = useUserContext()

    return (
        <div className="dashboard">
            {
                userData.length !== 0 && (  
                    <>
                        <SubHeader />
                        <div className="dashboard__content">
                            <AccountBalance />
                            <Services />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Dashboard