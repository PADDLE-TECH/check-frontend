import React from 'react'
import backArrow from "../../images/backArrow.png"
import './BackArrow.css'
import { Link } from 'react-router-dom'


const BackArrow = ( { destination }) => {
  return (
    <div>
    <Link to={destination}>
    <div className='gpt3__paybills_back'>
      <img src={backArrow}  alt="back-arrow" />   
    </div>
    
    </Link>
    </div>
  )
}

export default BackArrow