import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import db from "../../context/firebase"

const addTransactions = async (senderId, senderData, receiverId, receiverData, amount, description) =>{
  try{
    const senderRef = collection(db, "users", senderId, "transactions")
    await addDoc(senderRef,{
      // transferredAt: transferredDate(),
      transferredAt: serverTimestamp(),
      amount: -amount,
      description: description,
      remBalance: Number(senderData.balance) - Number(amount),
      receiverIban: receiverData.iban,
      receiverFirstName: receiverData.firstName,
      receiverLastName: receiverData.lastName
    })

    const receiverRef = collection(db, "users", receiverId, "transactions")
    await addDoc(receiverRef,{
      // transferredAt: transferredDate(),
      transferredAt: serverTimestamp(),
      amount: +amount,
      description: description,
      remBalance: Number(receiverData.balance) + Number(amount),
      senderIban: senderData.iban,
      senderFirstName: senderData.firstName,
      senderLastName: senderData.lastName
    })
  }
  catch(error){
    alert("Error while adding transaction")
  }
}

  // const transferredDate = () => {
  // let newDate = new Date()
  // let date = newDate.getDate()
  // let month = newDate.getMonth() + 1
  // let year = newDate.getFullYear()

  // return `${date<10?`0${date}`:`${date}`}${"/"}${month<10?`0${month}`:`${month}`}${"/"}${year}`
  // }

export {addTransactions}