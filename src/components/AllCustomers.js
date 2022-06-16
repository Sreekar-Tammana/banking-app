import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import '../styles/allcustomers.css'

const AllCustomers = () => {

  const data = collection(database, 'customers');

  const [done, setDone] = useState([])

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data() }
    });
    
    setDone(done)
  }
  
  // getCustomers()

  return (
    <>
      <div></div>

      <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
        </tr>
        {done.map((item, i) => {
          return (
            <tr key={i} className='values'>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.account_number}</td>
              <td>{item.balance}</td>
            </tr>
          )
        })}
      </table>

    </>
  )
}

export default AllCustomers