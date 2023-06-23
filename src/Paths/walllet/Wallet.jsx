import React from 'react'
import halfIcon from "../../images/halfIcon.png"
import  sideArrowColor from "../../images/sideArrowColor.png"
import padIcon from "../../images/padIcon.png"
import upLogo from "../../images/upLogoColor.png"
import wallet from "../../images/wallet.png"
import leftArrow from "../../images/arrowLeft.png"
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./Wallet.css"
import BackArrow from '../../components/backArrow/BackArrow'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

const walletItems = [
    {
       "id":1,
       "icon": wallet,
       "title":"Fund my wallet",
       "small":"Add money to perform trasactions",
       "direction":leftArrow,
       "pathname":"/fwallet"
    },
    {
       "id":2,
       "icon": sideArrowColor,
       "title":"Transfer",
       "small":"Pay merchant/Transfer funds to friends",
       "direction":leftArrow,
       "pathname":"/wtransfer"
    },
    {
       "id":3,
       "icon": upLogo,
       "title":"Withdraw",
       "small":"Get money back to your bank account",
       "direction":leftArrow,
       "pathname":"fwithdraw"
    },
    {
       "id":4,
       "icon": padIcon,
       "title":"Airtime & Data",
       "small":"Top your line",
       "direction":leftArrow,
       "pathname":"/frecharge"
    },
    {
       "id":5,
       "icon": halfIcon,
       "title":"Pay your bills",
       "small":"Pay utility bills",
       "direction":leftArrow,
       "pathname":"/home/paybills"
    },

]

const Wallet = () => {
  return (
    <div className='gpt3__wallet'>
    
    <BackArrow destination={"/home"} />
    
    <h6>Transfer Funds</h6>
    
    <div className='gpt3__wallet_balance'>
    
        <div className='gpt3__wallet-b'>  
        <p>Wallet Balance</p>
        <p>************</p>
        </div>
              
       <div className='gpt3__wallet-eye'>
        <VisibilityOff sx={{  color:"#C57600"  , fontSize:"15px"}} /> 
        <p>Show </p>
       </div>
       
    </div>
    
    
                { walletItems.map((item) => {
    return (
    
    <Link to={item.pathname} >
           <div className='gpt3__wallet_card'  key={item.id}>
           
           <div className='gpt3__wallet_card-text'>
              <img src={item.icon} alt="paybills-icon" />    
              <div className='gpt3__wallet-ex'>
              <p className='heading'>{item.title}</p>
              <p className='small-heading'>{item.small}</p>
              </div>
           </div>
           
           
           <div className='gpt3__wallet_card-arw'>
           <img src={item.direction} alt="paybills-arrow" />
           </div>
           </div>
          
    
    </Link>

    
    
    )
    
    })}
    
    {/* NAVBAR */}
    <Navbar/>
    </div>
  )
}

export default Wallet