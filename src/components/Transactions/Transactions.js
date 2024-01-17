import React, { useEffect, useState } from 'react'
import "./Transactions.css"
import SubHeader from '../SubHeader/SubHeader'
import { useUserContext } from '../../context/UserProvider'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import db from '../../context/firebase'

function Transactions() {
    const { userData } = useUserContext()
    const [transaction, setTransaction] = useState([])

    const dataPerRow = 4
    const [loadMore, setLoadMore] = useState(dataPerRow)

    useEffect(() => {
        const fetchTransactions = async () =>{
            const q = query(collection(db, "users", userData.id, "transactions"), orderBy('transferredAt', 'desc'))
            let transactionRef = await getDocs(q)
            setTransaction(transactionRef.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })))
        }
        fetchTransactions()
    }, [userData.id])

    const extractDate = (timestamp) => {
        let date = new Intl.DateTimeFormat("fr-FR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).format(timestamp * 1000)
        return date
    }

    const handleLoadMore = () => {
        setLoadMore(loadMore + dataPerRow)
    }

    const handleShowLess = () => {
        setLoadMore(dataPerRow)
    }

    const handleViewOrder = (value) => {
        if(value.amount > 0){
            console.log(
                "Date:", extractDate(value.transferredAt.seconds),
                "\nSender Full Name:", `${value.senderFirstName} ${value.senderLastName}`,
                "\nSender IBAN:", value.senderIban,
                "\nAmount:", value.amount + "€",
                "\nDescription:", value.description,
                "\n",
                "\nReceiver Full Name:", `${userData.data.firstName} ${userData.data.lastName}`,
                "\nReceiver IBAN:", userData.data.iban
            )
        }
        else{
            console.log(
                "Date:", extractDate(value.transferredAt.seconds),
                "\nReceiver Full Name:", `${value.receiverFirstName} ${value.receiverLastName}`,
                "\nReceiver IBAN:", value.receiverIban,
                "\nAmount:", value.amount + "€",
                "\nDescription:", value.description,
                "\n",
                "\nSender Full Name:", `${userData.data.firstName} ${userData.data.lastName}`,
                "\nsender IBAN:", userData.data.iban
            )
        }

    }


  return (
    <div className = "dashboard transaction">
        {
            userData.length !== 0 && (
                <>
                    <SubHeader />

                    <div className="transaction__account__items" >
                        <label>IBAN</label>
                        <span>{userData.data.iban}</span>
                    </div>

                    <div className="transaction__contents">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Value Date</th>
                                    <th>Description</th>
                                    <th>Transaction</th>
                                    <th>Balance</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transaction?.slice(0, loadMore)?.map((value, i) => (
                                        <tr key={i}>
                                            <td>{extractDate(value.transferredAt.seconds)}</td>
                                            <td>{extractDate(value.transferredAt.seconds)}</td>
                                            <td>{value.description}</td>
                                            <td>{value.amount} €</td>
                                            <td>{value.remBalance} €</td>
                                            <td><p className="view__order" onClick={() => handleViewOrder(value)}>View Order</p></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="transaction__load">
                        {
                            dataPerRow < transaction?.length ? (
                                loadMore < transaction?.length ? (
                                    <p onClick={handleLoadMore}>Load more</p>
                                ) : (
                                    <p onClick={handleShowLess}>Show Less</p>
                                )
                            ) : (
                                ""
                            )
                        }
                    </div>
                </>
            )
        }
    </div>
    )
}

export default Transactions
