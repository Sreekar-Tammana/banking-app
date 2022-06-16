import React from 'react'
import Service from './Service'
import '../styles/services.css'
import customerImg from '../images/customers.png';
import transactionsImg from '../images/transactions.png';
import transferImg from '../images/transfer.png'

const Services = () => {
  return (
    <div className='services-boxes'>
      <div className="main-title">
        OUR SERVICES
      </div>
      <div className="container-1">
        <Service image={customerImg} title="Customers" desc="List of customers" link="/allCustomers" btn="View customers"/>

        <Service image={transferImg} title="Transfer Money" link="/moneyTransfer" desc="Money transfercan be done" btn="Transfer"/>

        <Service image={transactionsImg} title="Ledger" link="/transactions" desc="All transactions are displayed" btn="View transactions"/>
      </div>
    </div>
  )
}

export default Services