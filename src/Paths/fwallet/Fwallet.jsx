import React from 'react'
import BackArrow from '../../components/backArrow/BackArrow'
import "./Fwallet.css"
import exLogo from "../../images/exLogo.png"
import copyIcon from "../../images/copyIcon.png"
import { Box } from '@mui/material'
import Navbar from '../../components/navbar/Navbar'


const Fwallet = () => {
  return (
    <div className='gpt3__fwallet'>
    <BackArrow  destination="/wallet" />
    
    <h6>Fund Wallet</h6>
    <p className='text-one'>Fund your check wallet via your bank account.</p>
    
    <div className='gpt3__fwallet-details'>
    <div className='img'>
    <img src={exLogo} alt="act-logo" />
    </div>
    
    <p>The account details provided below is
        unique to your Check Retail Account.</p>
    </div>
    
    <p  className='num-text'>1. &nbsp; Copy the account details provided below.</p>
    
    
    <div className='gpt3__fwallet-acct'>
    
     <div className='gpt3__fwallet-acct-div'>
     <h6>Bank Name</h6>
     <h4>Guarantee Trust Bank</h4>
     </div>
     <div className='gpt3__fwallet-acct-div'>
     <h6>Your Account Name</h6>
     <h4>Akinyemi Ogungbaro</h4>
     </div>
     <div className='gpt3__fwallet-acct-div'>
     <h6>Your Account Number</h6>
     
     <Box sx={{display:"flex"  , gap:"3px"}}>
     <h4>38290103827</h4>
     <img src={copyIcon} alt="" />
     </Box>
     </div>
    
    </div>
    
    <p  className='num-text'>2. &nbsp; Your Check Retail wallet will be funded immediately.</p>
    <p  className='num-text'>3. &nbsp; Transfer the amount you want to fund, using Mobile Banking.</p>
    
    
    <Navbar/>
    </div>
  )
}

export default Fwallet