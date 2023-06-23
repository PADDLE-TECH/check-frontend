import React from 'react'
import './Home.css'
import notiLogo from "../../images/notiLogo.png"
import groupLogo from "../../images/groupLogo.png"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import plusLogo from "../../images/plusLogo.png"
import { Link} from 'react-router-dom';
import HomeCard from '../../components/homecard/HomeCard';
import Typography from '@mui/material/Typography';
import Qacess from '../../components/qaccess/Qacess';
import Navbar from '../../components/navbar/Navbar';




const Home = () => {
  return (
    <div className='gpt3__home'>
    
    <div className='gpt3__home-noti'>
    
     <div className='gpt3__home-noti_1'>
     <img src={groupLogo} alt="group-logo" />
     <p>Emmanuel Ochigbo</p>
     </div>
     
     <div className='gpt3__home-noti_2'>
     <img src={notiLogo} alt="noti-logo" />
     </div>
     
     
    </div>
    
    
    
    <div className='gpt3__home-header'>
      <div className='gpt3__home-header-amt'>
       <p>***********</p>
       
       
       <div className='gpt3__home-header-eye'>
        <VisibilityOff sx={{  color:"#C57600"  , fontSize:"15px"}} /> 
        <p>Show Balance</p>
       </div>
       
      </div>
      
      
      <div className='gpt3__home-fund'>
      
      <div className='gpt3__home-fund-logo'>
      <img src={plusLogo} alt="plus-logo" />
      <p>Fund Wallet</p>
      </div>
      
      <div className='gpt3__home-fund_transfer'>Transfer</div>
      
      </div>
    </div>
    
    {/* CARD */}
    
    <Typography sx={{  fontFamily:"raleWay" , fontWeight:"600" , marginY:"2ch"}} >Your Insights</Typography>
    
    <HomeCard/>
    
    {/* Quick Acess */}
    
    <Typography sx={{  fontFamily:"raleWay" , fontWeight:"600" , marginY:"2ch"}} >Quick Access</Typography>
    
    <Qacess/>
    
    {/* NAVBAR */}
    <Navbar/>
    
    </div>
  )
}

export default Home