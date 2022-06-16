import React, { useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { app, database } from '../firebaseConfig';

const RetrieveCustomers = () => {

    const data = collection(database, 'customers');

    const [done, setDone] = useState([])
  
    const getCustomers = async () => {
      const res = await getDocs(data);
      const done = res.docs.map((item) => {
        return { ...item.data() }
      });
      setDone(done)
    }
  
    getCustomers()

}

export default RetrieveCustomers