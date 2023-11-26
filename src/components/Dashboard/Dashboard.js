import React from 'react'
import './Dashboard.css'
import SubHeader from '../SubHeader/SubHeader'

function Dashboard() {

    return (
        <div className="dashboard">
            <SubHeader />
            <div className="dashboard__content">
                <p>Dashboard</p>
            </div>
        </div>
    )
}

export default Dashboard