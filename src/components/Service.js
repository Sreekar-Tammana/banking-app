import React from 'react'
import '../styles/service.css'
import customer from '../images/customers.png';

const Service = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Customer img" />
      <div className="service-name">{props.title}</div>
      <div className="service-desc">{props.desc}</div>
      <a href={props.link}>
        <button>{props.btn}</button>
      </a>
    </div>
  )
}

export default Service