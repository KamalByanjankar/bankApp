import React, { useEffect, useState } from 'react'
import "./Transfer.css"
import SubHeader from '../SubHeader/SubHeader'
import { useUserContext } from '../../context/UserProvider'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../context/firebase'
import { transact } from '../Util/transact'
import { addTransactions } from '../Util/addTransactions'

function Transfer() {
  const { userData } = useUserContext()

  const [state, setState] = useState({
    receiverIban: "",
    senderIban: "",
    description: "",
    amount: "",
    accounts: [],
  })

  useEffect(() => {
    // console.log("fetching all accounts")
    const fetchAllAccounts = async () =>{
      const querySnapshot = await getDocs(collection(db, "users"))
        setState({
          ...state,
          accounts: querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
        })
  }
  fetchAllAccounts()
  }, [state])

  const handleTransfer = async(e) => {
    e.preventDefault()
    let acc1, acc2 = [0, 0]
    for(let i= 0; i < state.accounts.length; i++){
      if(userData.data.iban === state.receiverIban){
        alert("Payer's and Receiver's IBAN number cannot be same!")
        setState({
          ...state, 
          receiverIban: "",
          amount: "",
          description: ""
        })
        break;
      }
 
      else if(state.accounts[i].data.iban === userData.data.iban){
        acc1 = i;
      }

      else if(state.accounts[i].data.iban === state.receiverIban){
        acc2 = i;
      }
      else{
        alert("IBAN not found. Please check your IBAN number!")
        window.location="/transfer"
      }
    }
      
    transact(
      state.accounts[acc1].id, 
      state.accounts[acc1].data.balance, 
      state.accounts[acc2].id, 
      state.accounts[acc2].data.balance,
      state.amount,
      state.description
    )

    addTransactions(
      state.accounts[acc1].id, 
      state.accounts[acc1].data.balance, 
      state.accounts[acc2].id, 
      state.accounts[acc2].data.balance,
      state.amount,
      state.description
    )
  }

  const handleTransferChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className = "transfer dashboard">
      {
        userData.length !== 0 && (
          <>
            <SubHeader />
            <h1>Domestic Transfer</h1>

            <form onSubmit={handleTransfer}>
              <div className="transfer__contents">
                <div className="transfer__field">
                  <p>Transfer From</p>
                  <div className="transer__items">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={`${userData.data.firstName} ${userData.data.lastName}`} readOnly />
                  </div>
                  <div className="transer__items">
                    <label>Sender IBAN Number</label>
                    <input type="text" name="sender" value={userData.data.iban} readOnly/>
                  </div>
                  <div className="transer__items">
                    <label>Authorized Balance</label>
                    <input type="number" name="authorizedBalance" value={userData.data.balance} readOnly/>
                  </div>
                </div>

                <div className="transfer__field">
                  <p>Transfer To</p>
                  <div className="transer__items">
                    <label>Receiver IBAN Number *</label>
                    <input type="text" name="receiverIban" value={state.receiverIban} required onChange={handleTransferChange} style={{textTransform: 'uppercase'}}/>
                  </div>
                  <div className="transer__items">
                    <label>Amount *</label>
                    <input type="number" name="amount" value={state.amount} required onChange={handleTransferChange} />
                  </div>
                  <div className="transer__items">
                    <label>Description *</label>
                    <input type="text" name="description" value={state.description} required onChange={handleTransferChange}/>
                  </div>
                </div>
              </div>

              <div className="transfer__btn">
                <button type="submit">Transfer</button>
              </div>
            </form>
          </>
        )
      }
    </div>
  )
}

export default Transfer