import { doc, updateDoc } from "firebase/firestore"
import db from "../../context/firebase"
import { addTransactions } from "./addTransactions"

const transact = async (senderId, senderBalance, receiverId, receiverBalance, amount, description) =>{
    if(senderBalance <= amount){
      alert("Insufficient Balance")
    }
    else{
      try{
        //substracting amount from sender's balance
        await updateDoc(doc(db, "users", senderId), {
          balance: Number(senderBalance) - Number(amount)
        })

        //adding amount to receiver's balance
        await updateDoc(doc(db, "users", receiverId), {
          balance: Number(receiverBalance) + Number(amount)
        })
      }catch(error){
        alert("Error while transferring amout!")
      }
      alert("Transfer Successful")
      addTransactions(description, amount, senderBalance, senderId, receiverId, receiverBalance)
      window.location="/transfer"
    }
}

export {transact}