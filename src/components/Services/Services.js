import React from 'react'
import "./Services.css"
import depositLogo from "../../assets/deposit.png"
import withdrawLogo from "../../assets/withdraw.png"
import transferLogo from "../../assets/transfer.png"
import transactionLogo from "../../assets/transaction.png"

function Services() {
  return (
    <div className="services">
        <h3>Our Services</h3>
        <div className="services__cardItems">
            <ul>
                <li>
                    <div className="services__cardItems__link">
                        <img className="services__cardItems__img" src={depositLogo} alt="Deposit Money"/>
                        <h5>Deposit Money</h5>
                    </div>
                </li>
                <li>
                    <div className="services__cardItems__link">
                        <img className='services__cardItems__img' src={withdrawLogo} alt="Withdraw Money"/>
                        <h5>Withdraw Money</h5>
                    </div>
                </li>
                <li>
                <div className="services__cardItems__link">
                    <img className='services__cardItems__img' src={transferLogo} alt="Transfer Money"/>
                    <h5>Transfer</h5>
                </div>
                </li>
                <li>
                <div className="services__cardItems__link">
                    <img className='services__cardItems__img' src={transactionLogo} alt="Transactions"/>
                    <h5>Transactions</h5>
                </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Services