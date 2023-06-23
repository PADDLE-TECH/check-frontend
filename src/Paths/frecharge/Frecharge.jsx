import React from 'react'
import "./Frecharge.css"
import { useNavigate } from 'react-router-dom'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, Formik , Field, ErrorMessage } from 'formik'
import BackArrow from '../../components/backArrow/BackArrow'
import { useState , useEffect } from 'react';
import * as Yup from 'yup'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Select } from '@mui/material';
import downIcon from "../../images/downIcon.png"





const Frecharge = () => {

const navigate = useNavigate()
const [ isShown , setIsShown ] = useState(false)
const [active , setActive] = useState(false);
const [isSubmitting , setIsSubmitting] = useState(false)


const showAirtime= () => {
    setIsShown(false);
    setActive(false)
   }
   
   const showScan = () => {
    setIsShown(true);
    setActive(true)
    
   }
useEffect(() => {
    setActive(false)
  
  }, [])


  return (
    <div className='gpt3__frecharge'>
    
   <div onClick={() => navigate(-1)}>
   <BackArrow/>
   </div>    
   
   <h6>Airtime & Data</h6>
    
   <div className='gpt3__frecharge_balance'>
    
    <div className='gpt3__wallet-b'>  
    <p>Wallet Balance</p>
    <p>************</p>
    </div>
          
   <div className='gpt3__frecharge-eye'>
    <VisibilityOff sx={{  color:"#C57600"  , fontSize:"15px"}} /> 
    <p>Show </p>
   </div>
   
</div>
          
      <div className='gpt3__frecharge-btn'>
        <button  className={active ? undefined : "active" } onClick={showAirtime}>Wallet ID</button>
        <button className={active ? "active" : undefined} onClick={showScan}>Scan QR Code</button>
       </div>
       
       {!isShown &&   (
       
      
       
       <form  className='gpt3__frecharge-formbox'  action="">
       
       <FormControl sx={{ 
    width: "327px" ,
    marginBottom:"1rem",
    maginX:"auto"
    }} variant="outlined" >
    <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Network</Typography>
     <TextField
       sx={{
           width: { xs: "300px", sm: "200px", md: "327px" },
           mx:"auto"
       }}
       disabled
       name="rid"
       placeholder='Select Network '
       variant="outlined"
       id='rid'
       InputProps={{
          
           endAdornment:<InputAdornment><img src={downIcon} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
       }}
       aria-describedby="outlined-weight-helper-text"
       inputProps={{
         'aria-label': 'weight',
       }}
     />
     
    
     
   </FormControl>
   <FormControl sx={{ 
    width: "327px" ,
    marginBottom:"1rem",
    maginX:"auto"
    }} variant="outlined" >
    <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Amount</Typography>
     <TextField
       sx={{
           width: { xs: "300px", sm: "200px", md: "327px" },
           mx:"auto"
       }}
       name="rid"
       placeholder='E.G. N5000 '
       variant="outlined"
       id='rid'
    
       aria-describedby="outlined-weight-helper-text"
       inputProps={{
         'aria-label': 'weight',
       }}
     />
     
    
     
   </FormControl>
   <FormControl sx={{ 
    width: "327px" ,
    marginBottom:"1rem",
    maginX:"auto"
    }} variant="outlined" >
    <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Mobile Number</Typography>
     <TextField
       sx={{
           width: { xs: "300px", sm: "200px", md: "327px" },
           mx:"auto"
       }}
       name="rid"
       placeholder='E.G. 09027839393'
       variant="outlined"
       id='rid'
     
       aria-describedby="outlined-weight-helper-text"
       inputProps={{
         'aria-label': 'weight',
       }}
     />
     
    
     
   </FormControl>
   
   
   <div className='gpt3__frecharge-sub'>
        <button type='submit' disabled={isSubmitting}>{ isSubmitting ? <CircularProgress size="1.2rem" color="inherit" /> : "Proceed"}</button>
        </div>

       
       </form>
              
 

       )}
    
    </div>
  )
}

export default Frecharge