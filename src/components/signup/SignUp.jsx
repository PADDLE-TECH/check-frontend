import React, { useEffect } from 'react'
import { Form, Formik , Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


import { useState } from 'react'
import './SignUp.css'
import { Box , Container  } from '@mui/system'
import emailLogo from "../../images/emailLogo.png"
import passwordLogo from "../../images/passwordLogo.png"
import userLogo from "../../images/userLogo.png"
import phoneLogo from "../../images/phoneLogo.png"
import addressLogo from "../../images/addressLogo.png"
import exLogo from "../../images/exLogo.png"
import rightLogo from "../../images/rightLogo.png"
import wrongLogo from "../../images/wrongLogo.png"

import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { Link} from 'react-router-dom';


const SignUp = ({ setIsShown , setActive }) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [passwordInput , setPasswordInput] = useState('') 
    
    const [weakP , setWeakP] = useState(false) 
    const [mediumP , setMediumP] = useState(false) 
    const [strongP , setStrongP] = useState(false) 
    
    const [weak , setWeak] = useState(false) 
    const [medium , setMedium] = useState(false) 
    const [strong , setStrong] = useState(false) 
    
    const weakPassword= new RegExp('(?=.{8,})');
    const mediumPassword = new RegExp('(?=.*[A-Z])(?=.*[a-z])')
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    
    const regStyle = { 
        color:"#DC0019",
        fontWeight:600,
        cursor:"pointer"
      }
      const showLogin = () => {
        setIsShown(false)
        setActive(false)
        }
      const handleClickShowPassword = () => setShowPassword((show) => !show);
  
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
    
    <div className='gpt3__signup'>
         <Typography sx={{   mx:"auto", fontFamily:"raleWay" , marginBottom:"1rem"}} >Getting to meet you will be a pleasure </Typography>

     <Formik
       initialValues={{ email: '', password: ''  , firstName:'' , lastName:'' , phoneNo:'' , address:''}}
       validate={values => {
         const errors = {};
         
         setPasswordInput(values.password)
        
         weakPassword.test(passwordInput) ? setWeakP(true) : setWeakP(false);
         
         if(weakPassword.test(passwordInput)) {
         setWeakP(true)
         setWeak(true);
         } else { 
         setWeakP(false)
         setWeak(false)
         }
         
         if(mediumPassword.test(passwordInput)) {
          setMediumP(true);
          setWeakP(false);
          setMedium(true)
         } else {
          setMediumP(false);
          setMedium(false)
         }
         
         if(strongPassword.test(passwordInput)) {
          setStrongP(true);
          setMediumP(false);
          setStrong(true)
         } else {
          setStrongP(false);
          setStrong(false)
         }
         

         
                  
        !values.firstName ? errors.firstName = "Please enter your first name" : undefined
        !values.lastName ? errors.lastName = "Please enter your last name" : undefined
        !values.phoneNo ? errors.phoneNo = "Please enter your phone number" : undefined
        !values.password ? errors.password = "Please enter your password" : undefined
        !values.email ? errors.email = "Please enter your email" : undefined
        !values.address ? errors.address = "Please enter your address" : undefined
          
     
        
         if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)  && values.email.length != 0) {
          errors.email = "Invalid email address"
         }
         
        
        if(!/^0([89][01]|70)\d{8}$/i.test(values.phoneNo) && values.phoneNo.length !=0 ) {
          errors.phoneNo = "Please enter a valid number";
        }
         
         
         if(!/^[A-Za-z ]*$/i.test(values.firstName)) {
          errors.firstName ="Please enter a valid first name"
          } else if(values.firstName.length <=3  && values.firstName.length != 0  ) {
          errors.firstName = "Enter 3 or more characters"
         } 


         if(!/^[A-Za-z ]*$/i.test(values.lastName)) {
          errors.lastName ="Please enter a valid last name"
          }else if (values.lastName.length <= 3 && values.lastName !=0) {
          errors.lastName = "Enter 3 or more characters"
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
         
         
         <div className='gpt3__login-form-box'>
         
         
         <div>
         <FormControl sx={{
         width: "327px" ,
         maginX:"auto",
         marginBottom:"0.5rem"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>First Name</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            required
            helperText={errors.firstName && touched.firstName && errors.firstName}
            name="firstName"
            placeholder='Enter your first name'
            variant="outlined"
            id='first-name'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={userLogo} alt="u-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
        </FormControl>
         </div>
         
         
         <div>
         <FormControl sx={{ 
         width: "327px" ,
         marginBottom:"1rem",
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Last Name</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            required
            helperText={errors.lastName && touched.lastName && errors.lastName}
            name="lastName"
            placeholder='Enter your last name'
            variant="outlined"
            id='last-name'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={userLogo} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
           <Box sx={{ marginLeft: { xs:"10px"  }, display:"flex" , alignItems:"center" , marginY:"1ch"}}>
           <img src={exLogo} alt="ex-logo" className='ex-logo' />&nbsp;
           <p className='ex-logo-text'>Your last name is your surname</p>
           </Box>
          
        </FormControl>
         </div>
         
         
          
         <div>
         <FormControl sx={{
         width: "327px" ,
         marginBottom:"0.5rem",
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{ paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Email Address</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            required
            helperText={errors.email && touched.email && errors.email}
            name="email"
            placeholder='example@domain.com'
            variant="outlined"
            id='email-input'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={emailLogo} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
        </FormControl>
         </div>
         
         
         <div>
         <FormControl sx={{ 
         width: "327px" ,
         marginBottom:"1rem",
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{ paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Phone Number</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNo}
            required
            helperText={errors.phoneNo && touched.phoneNo && errors.phoneNo}
            name="phoneNo"
            placeholder='Enter your phone number'
            variant="outlined"
            id='phone-number'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={phoneLogo} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
          <Box sx={{ marginLeft:{xs:"10px"}, display:"flex" , alignItems:"center" , marginY:"1ch"}}>
           <img src={exLogo} alt="ex-logo" className='ex-logo' />&nbsp;
           <p className='ex-logo-text'>Please ensure your phone number is correct</p>
           </Box>
          
        </FormControl>
         </div>
         
         
         <div>
         <FormControl sx={{
         width: "327px" ,
         marginBottom:"0.5rem",
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{ paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Address</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            required
            helperText={errors.address && touched.address && errors.address}
            name="address"
            placeholder='Enter your address'
            variant="outlined"
            id='address-input'
            InputProps={{
               
                startAdornment:<InputAdornment><img src={addressLogo} alt="e-logo" />&nbsp;&nbsp;</InputAdornment>
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
        </FormControl>
         </div>
         
         
         <div>
         <FormControl sx={{ width: '327px', marginBottom:"0.5rem", }} >
         <Typography htmlFor="input" sx={{ paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"} ,fontWeight:600 , marginBottom:'1ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Password</Typography>
          <Field as={TextField}
               sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                helperText={errors.password && touched.password && errors.password}  
               name="password"
               placeholder='Enter your Password'
               id="password-input"
               type={showPassword ? 'text' : 'password'}
               
               InputProps={{
                startAdornment:<InputAdornment><img src={passwordLogo} alt="password-logo" /> &nbsp;&nbsp;</InputAdornment>,
                endAdornment:
                    <InputAdornment
                   
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  
               }}
               
               endAdornment={
                <InputAdornment position="end"
               
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
          <div className='gpt3__password-strength'>
            <p>Password Strength :</p>
            
            <div className='gpt3__password-flex'>
            
             <div className='gpt3__password-strength-div'>
             <span id='weak'  className={ weakP ? " weak " : undefined } ></span>
            
            <span  className={ mediumP ? " medium " : undefined } ></span>
            
            <span  className={ strongP ? " strong " : undefined } ></span>
            
             </div>
            
            
            <div className='gpt3__password-text'>
            <p>Weak</p>
            <p>Medium</p>
            <p>Strong</p>
            </div>
          
            </div>
            
          </div>
          
          
          <div className='gpt3__requirement'>
          
          <h4>We Require</h4>
            
            <div className='gpt3__requirement-div'>
            <img src={weak ? rightLogo : wrongLogo  } alt="" />
            <p>To be at least 8 characters long</p>
            </div>
            
            <div className='gpt3__requirement-div'>
            <img src={medium ? rightLogo : wrongLogo  } alt="" />
            <p>To contain Uppercase and Lowercase.</p>
            </div>
            
            <div className='gpt3__requirement-div'>
            <img src={strong ? rightLogo : wrongLogo  } alt="" />
            <p>To have a number and symbol.</p>
            </div>
            
          
          
          </div>
          
        </FormControl>
         </div>
         
       
        
        <div className='gpt3__check-button'>
        <button type='submit' disabled={isSubmitting}>{ isSubmitting ? <CircularProgress size="1.2rem" color="inherit" /> : "Sign Up"}</button>
        </div>
        
        <div className='gpt3__check-register-link'>
         <p>Already have an account </p>
         <span  style={regStyle}   onClick={showLogin}  >Login</span>
        </div>
        
         
         
         
         
         </div>
        
          
         </form>
       )}
     </Formik>
    </div>
  )
}

export default SignUp