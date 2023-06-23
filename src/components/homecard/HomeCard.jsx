import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './HomeCard.css'
import scanIcon from "../../images/scanIcon.png"
import walletIcon from "../../images/walletIcon.png"
import locationIcon from "../../images/locationIcon.png"
import bookIcon from "../../images/bookIcon.png"


import React from 'react'
import { Link } from 'react-router-dom';


const cards = [
    {
        "id":1,
        "image" : scanIcon,
        "title" : "Scan ",
        "small" : "",
        "pathname": "/scan"

    },
    {
        "id":2,
        "image" : locationIcon,
        "title" : " OTD",
        "small": "Order to Doorstep",
        "pathname": "/location"

    },
    {
        "id":3,
        "image" : walletIcon,
        "title" : "Wallet",
        "small":"",
        "pathname": "/wallet"

    },
    {
        "id":4,
        "image" : bookIcon,
        "title" : "Orders ",
        "small":"",
        "pathname": "/orders"

    },

]

const HomeCard = () => {
  return (
    <div className='gpt3__home-card'>
    { cards.map((card) => {
    return (
      <Card variant='outlined' key={card.id}
      sx={{
      borderRadius:"8px" , 
      display:"flex", flexDirection:"column", 
      justifyContent:"center" , textAlign:"center" ,
      boxShadow:"0px 2px 40px rgba(0, 0, 0, 0.1)"
      }}>
      <Link  to={card.pathname} >
      <CardContent>
        <img src={card.image} alt="card-title" /> 
        <Typography sx={{  fontFamily:"raleWay" , fontWeight:"600"}} >{card.title} </Typography>
        <Typography sx={{  fontFamily:"raleWay" , fontWeight:"300" , fontSize:"13px"}} >{card.small} </Typography>
      </CardContent>
      </Link>
      </Card>
      
    
    
    )
    
    })}
    
    </div>
  )
}

export default HomeCard