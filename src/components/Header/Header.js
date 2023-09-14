import React from 'react'
import bankLogo from '../../assets/bank-logo.jpg';
import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="header">
      <div className="header__components">
        <div className="header__title" onClick={handleClick}>
          <h3>Himalaya Bank</h3>
          <p>Online Banking</p>
        </div>
        <div className="header__logo">
            <img src={bankLogo} alt="Logo" onClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default Header