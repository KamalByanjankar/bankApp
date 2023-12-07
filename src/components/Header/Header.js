import React from 'react'
import bankLogo from '../../assets/bank-logo.jpg';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header__components">
        <div className="header__title">
          <h3>Himalaya Bank</h3>
          <p>Online Banking</p>
        </div>
        <div className="header__logo">
            <img src={bankLogo} alt="Logo"/>
        </div>
      </div>
    </div>
  )
}

export default Header