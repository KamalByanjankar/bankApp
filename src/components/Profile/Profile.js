import React from 'react'
import "./Profile.css"
import SubHeader from '../SubHeader/SubHeader'
import Profilesidebar from './Profilesidebar'
import ProfileEditForm from './ProfileEditForm'
import { useUserContext } from '../../context/UserProvider'

function Profile() {
  const {userData} = useUserContext()

  return (
    <div className="dashboard information">
          {
            userData.length !== 0 && (
              <>
                <SubHeader />
                <div className="information__contents">
                  <Profilesidebar />
                  <div className="line"></div>
                  <ProfileEditForm />
                </div>
              </>
            )
          }
    </div>
  )
}

export default Profile