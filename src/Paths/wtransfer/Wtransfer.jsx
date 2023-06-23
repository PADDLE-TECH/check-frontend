import React, { useEffect, useState } from 'react'
import "./Wtransfer.css"
import BackArrow from '../../components/backArrow/BackArrow'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, Formik , Field, ErrorMessage } from 'formik'
import { Box , Container  } from '@mui/system'
import userLogo from "../../images/userLogo.png"
import messIcon from "../../images/messIcon.png"
import * as Yup from 'yup'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import exLogo from "../../images/exLogo.png"
import { Divider } from '@mui/material';





const Wtransfer = () => {

    const [active , setActive] = useState(false);
    const [ isShown , setIsShown ] = useState(false)
    

  


    const showWallet= () => {
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
    <div className='gpt3__wtransfer'>
    <BackArrow destination="/wallet" />
    
    
    <h6>Transfer Funds</h6>
    
    <div className='gpt3__wtransfer_balance'>
    
        <div className='gpt3__wtransfer-b'>  
        <p>Wallet Balance</p>
        <p>************</p>
        </div>
              
       <div className='gpt3__wtransfer-eye'>
        <VisibilityOff sx={{  color:"#C57600"  , fontSize:"15px"}} /> 
        <p>Show </p>
       </div>
    </div>
    
       
       
    <div className='gpt3__wtransfer-btn'>
        <button  className={active ? undefined : "active" } onClick={showWallet}>Wallet ID</button>
        <button className={active ? "active" : undefined} onClick={showScan}>Scan QR Code</button>
       </div>
       
       
       {!isShown &&   (
           <Formik
           initialValues={{ rid: '', rname: ''  , amount:'' }}
           validate={values => {
             const errors = {};
             
             
             !values.rid ? errors.rid = "Please enter Recipient wallet ID" : undefined
             !values.amount ? errors.amount = "Amount must be specified" : undefined
             
             
             if(!/^[0-9\b]+$/i.test(values.rid)  && values.rid.length != 0) {
                errors.rid = "Invalid Input"
             } 
             
             if(!/^[0-9\b]+$/i.test(values.amount)  && values.amount.length !=0) {
                errors.amount = "Invalid Input"
             } else if (values.amount.length === 1) {
                errors.amount = "You cannot transfer less than N10"
             }
        
             
          
          
             return errors;
           }}
           onSubmit={(values, { setSubmitting }) => {
             setTimeout(() => {
               console.log(JSON.stringify(values, null, 2));
               setSubmitting(false);
             }, 400);
           }}
         >
           {({
             values,
             errors,
             touched,
             handleChange,
             handleBlur,
             handleSubmit,
             isSubmitting,
           }) => (
           
           
             <form onSubmit={handleSubmit}>
             
             
             <div className='gpt3__wtransfer-formbox'>
             
   <div>
         <FormControl sx={{ 
         width: "327px" ,
         marginBottom:"1rem",
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Recipient wallet ID</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            
            onBlur={handleBlur}
            value={values.rid}
            required
            helperText={errors.rid && touched.rid && errors.rid}
            name="rid"
            placeholder='Enter recipient wallet ID '
            variant="outlined"
            id='rid'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={userLogo} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
           <Box sx={{ marginLeft:"5px", display:"flex" , alignItems:"center" , marginY:"1ch" , gap:"2px"}}>
           <img src={exLogo} alt="ex-logo" className='ex-logo' />&nbsp;
           <p className='ex-logo-text'>Walled ID is the phone number registered with Check.</p>
           </Box>
          
        </FormControl>
         </div>
         
         
         
         <div>
         <FormControl sx={{
         width: "327px" ,
         marginBottom:"0.5rem",
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{ paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Recipient Name</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            disabled
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rname}
            required
            helperText={errors.rname && touched.rname && errors.rname}
            name="rname"
            placeholder='Recipient Name'
            variant="outlined"
            id='rname'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={userLogo} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
            <Box sx={{ marginLeft:"10px",  display:"flex" , alignItems:"center" , marginY:"1ch" , gap:"2px"}}>
           <img src={exLogo} alt="ex-logo" className='ex-logo' />&nbsp;
           <p className='ex-logo-text'>Recipient name is auto-filled</p>
           </Box>
        </FormControl>
         </div>
         
         
         <div>
         <FormControl sx={{
         width: "327px" ,
         maginX:"auto",
         marginBottom:"0.5rem"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Amount</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            required
            helperText={errors.amount && touched.amount && errors.amount}
            name="amount"
            placeholder='Enter amount to transfer'
            variant="outlined"
            id='amount'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={messIcon} alt="u-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
         <Divider sx={{bgColor:"secondary.light" , marginY:"1rem"}} />
          
          
        </FormControl>
         </div>
         
         <div className='gpt3__wtransfer-charges'>
         
         <div className='charges'>
         <p className='text'>Chargers</p>
         <p className='text'>Total Amount</p>
         </div>
         
         <div className='charges'>
         <p className='textc'>1.80</p>
         <p className='textc'>0.80</p>
         </div>
         
         </div>
         
         
         <div className='gpt3__wtransfer-sub'>
        <button type='submit' disabled={isSubmitting}>{ isSubmitting ? <CircularProgress size="1.2rem" color="inherit" /> : "Proceed"}</button>
        </div>



       
             
           
            
           
             
             
             
             </div>
            
              
             </form>
           )}
         </Formik>
       )}
       
    </div>
  )
}

export default Wtransfer
