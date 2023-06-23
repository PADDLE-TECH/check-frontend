import React from 'react'
import bulbIcon from "../../images/bulbIcon.png"
import ballIcon from "../../images/ballIcon.png"
import leftArrow from "../../images/arrowLeft.png"
import capIcon from "../../images/capIcon.png"
import cakeIcon from "../../images/cakeIcon.png"
import "./PayBills.css"
import BackArrow from '../../components/backArrow/BackArrow'
import { useNavigate } from 'react-router-dom'

const payBillsItems = [
        {
           "id":1,
           "icon": cakeIcon,
           "title":"TV",
           "direction":leftArrow,
           "pathname":"/tvsub"
        },
        {
           "id":2,
           "icon": bulbIcon,
           "title":"Electricity",
           "direction":leftArrow,
           "pathname":"/electricitysub"
        },
        {
           "id":3,
           "icon": ballIcon,
           "title":"Betting",
           "direction":leftArrow,
           "pathname":"/betting"
        },
        {
           "id":4,
           "icon": capIcon,
           "title":"Education",
           "direction":leftArrow,
           "pathname":"/education"
        },
    
]


const PayBills = () => {
const navigate = useNavigate()

  return (
    <div className='gpt3__paybills'>

  <div onClick={() => navigate(-1)} >
    <BackArrow />
    </div>
  
    
    <h6>Pay Bills</h6>
    
            { payBillsItems.map((item) => {
    return (
       <div className='gpt3__paybills_card'  key={item.id}>
           
       <div className='gpt3__paybills_card-text'>
          <img src={item.icon} alt="paybills-icon" />    
          <div className='gpt3__wallet-ex'>
          <p>{item.title}</p>
          
          </div>
       </div>
       
       
       <div className='gpt3__paybills_card-arw'>
       <img src={item.direction} alt="paybills-arrow" />
       </div>
       </div>
      
    
    
    )
    
    })}
    
    {/* Navbar */}
    </div>
  )
}

export default PayBills