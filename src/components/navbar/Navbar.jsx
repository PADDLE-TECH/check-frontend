import React from 'react'
import { Link, useMatch } from 'react-router-dom';
import hutLogo from "../../images/hutLogo.png"
import sideArrow from "../../images/sideArrow.png"
import scan from "../../images/scan.png"
import cart from "../../images/cart.png"
import user from "../../images/user.png"
import "./Navbar.css"
import { Card } from '@mui/material';

const Navbar = () => {

    const homeMatch = useMatch('/home');
    const transactionsMatch = useMatch('/transactions');
    const scanMatch = useMatch('/scan');
    const cartMatch = useMatch('/cart');
    const profileMatch = useMatch('/profile');
  return (
  
    <div className='gpt3__nav'>
     <Card  sx={{
      boxShadow: "0px 2px 40px rgba(0, 0, 0, 0.1)",
      
      width:{md:"33%" , sm:"100%" , xs:"100%"},
      padding: '10px',
      position: 'fixed',
      left: { xs:0 , sm:0 , md:"33.5%"},
      bottom: 0,
      fontSize:'10px',
      backgroundColor:"#fff",
      paddingTop:"1rem",
      paddingBottom:"1rem"
     
     
     }}> 
       <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none'  }}>
        <li>
          <Link to="/home" className={homeMatch ? 'active-link' : ''} style={{ color: 'black', textDecoration: 'none' }}>
          <div className='gpt3__navbar' id='firstnav'>
          <img src={hutLogo} alt="hut-logo" />
          <p>Dashboard</p>
          </div>
            
          </Link>
        </li>
        <li>
          <Link to="/transactions" className={transactionsMatch ? 'active-link' : ''} style={{ color: 'black', textDecoration: 'none' }}>
          <div className='gpt3__navbar'>
          <img src={sideArrow} alt="side-logo" />
          <p>Transaction</p>
          </div>
            
          </Link>
        </li>
        <li>
          <Link to="/scan" className={scanMatch ? 'active-link' : ''} style={{ color: 'black', textDecoration: 'none' }}>
          <div className='gpt3__navbar'>
          <img src={scan} alt="scan-logo" />
          <p>Scan</p>
          </div>
            
          </Link>
        </li>
        <li>
          <Link to="/cart" className={cartMatch ? 'active-link' : ''} style={{ color: 'black', textDecoration: 'none' }}>
          <div className='gpt3__navbar'>
          <img src={cart} alt="cart-logo" />
          <p>Cart</p>
          </div>
            
          </Link>
        </li>
        <li>
          <Link to="/profile" className={profileMatch ? 'active-link' : ''} style={{ color: 'black', textDecoration: 'none' }}>
          <div className='gpt3__navbar'>
          <img src={user} alt="user-logo" />
          <p>Profile</p>
          </div>
            
          </Link>
        </li>
      </ul>
    </Card>
    </div>
  )
}

export default Navbar