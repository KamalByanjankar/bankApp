import React from 'react'
import "./Card.css"
import visalogo from "../../assets/visa.png"
import chiplogo from "../../assets/chip.png"
import SubHeader from '../SubHeader/SubHeader'
import { useUserContext } from '../../context/UserProvider'
import { auth } from '../../context/firebase'

function Card() {
  const { userData } = useUserContext()

  const expiryDate = () => {
    const aa = auth.currentUser.metadata.creationTime;
    let d = new Date(aa)
    const month = d.getMonth() + 1
    const year = d.getFullYear() + 5
    return (month + "/" + year)
  }

  return (
    <div className="dashboard card">
      {
        userData.length !== 0 && (
          <>
            <SubHeader />
            <div className="card__account__details">
              <div className="card__content">
                <div className="card__bankname">HIMALAYA BANK</div>
                <div className="card__visalogo"><img src={visalogo} alt="Visa Logo" /></div>
                <div className="card__chiplogo"><img src={chiplogo}  alt="Card Chip"/></div>
                <div className="card__iban">{userData.data.iban}</div>
                <div className="card__username">{userData.data.firstName} {userData.data.lastName}</div>
                <div className="card__expirydate">{expiryDate()}</div>
                <div className="card__ring"></div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Card