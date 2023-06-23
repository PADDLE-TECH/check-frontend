import React from 'react'
import  messageLogo from "../../images/messageLogo.png"
import barLogo from "../../images/barLogo.png"
import beltLogo from "../../images/beltLogo.png"
import upLogo from "../../images/upLogo.png"
import { Link } from 'react-router-dom'
import './Qacess.css'



const Qacess = () => {

  return (
    <div className='gpt3__q'>
    
    
      <div className='gpt3__q-item' id='firstitem'>
      <Link to="">
      <img src={messageLogo} alt="m-logo" />
      <p>Recharge</p>
      </Link>
      </div>
      
      <div className='gpt3__q-item'>
      <Link to="">
      <img src={barLogo} alt="b-logo" />
      <p>Data</p>
      </Link>
      </div>
      <div className='gpt3__q-item'>
      
      <Link to="">
      <img src={upLogo} alt="u-logo" />
      <p>Withdraw</p>
      </Link>
      </div>
      
      
      <div className='gpt3__q-item'>
      <Link to="paybills">
      <img src={beltLogo} alt="be-logo" />
      <p>Pay Bills</p>
      </Link>
   
      </div>
    
    </div>
  )
}

export default Qacess