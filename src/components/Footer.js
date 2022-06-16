import React from 'react'
import '../styles/footer.css';
import bankLogo from '../images/banklogo-1.png'
import fbLogo from '../images/facebook.png'
import instaLogo from '../images/instagram.png'
import twitterLogo from '../images/twitter.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="handles">
        <img className='main-logo' src={bankLogo} alt="ICON" />
        <div className="socials">
          <a href="https://www.facebook.com/thesparksfoundation.info/" target="_blank"><img src={fbLogo} alt="Facebook" /></a>
          <a href="https://www.instagram.com/thesparksfoundation.info/?hl=en" target="_blank"><img src={instaLogo} alt="Instagram" /></a>
          <a href="https://twitter.com/hashtag/Thesparksfoundation?src=hashtag_click" target="_blank"><img src={twitterLogo} alt="Twitter" /></a>
        </div>
        <div className="off-web">
          <a href="https://internship.thesparksfoundation.info/" target="_blank">Offcial website</a>
        </div>
      </div>

      <div className="page-links">
        <h2>Pages</h2>
        <a href="/allCustomers">View customers</a>
        <a href="/moneyTransfer">Transfer funds</a>
        <a href="/transactions">Transactions</a>
      </div>

      <div className="message">
        <h2>Message us</h2>
        <form className='forms' autoComplete='off'>
          <input type="text" name="name" id="name" placeholder='Name' />
          <input type="text" name="email" id="email" placeholder='Email' />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Footer