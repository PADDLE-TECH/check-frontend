import React, { useEffect } from 'react'
import { Form, Formik , Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


import { useState } from 'react'
import './Login.css'
import SignUp from '../../components/signup/SignUp'
import { Box , Container  } from '@mui/system'
import checkLogo from '../../images/checkLogo.png'
import emailLogo from "../../images/emailLogo.png"
import passwordLogo from "../../images/passwordLogo.png"

import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Basic from '../../components/signup/SignUp'







const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [ isShown , setIsShown ] = useState(false)
    const [active , setActive] = useState(false);
    
      
    const regStyle = { 
      color:"#DC0019",
      fontWeight:600,
      cursor:"pointer"
    }
    
    const initialValues = {
      email:"",
      password:""
    
    }
    const validationSchema=Yup.object().shape({
     email:Yup.string().email('Invalid email address').required('Please enter your email address'),
     password:Yup.string().required('Please enter your password')
     
    })
    
    
    const handleSubmit = (values , props) => {
     console.log(values)
     
     setTimeout(() => {
        props.resetForm()
        props.isSubmitting(false)
     
     }, 3000)
     
    
    }
    

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    

     
     const showLogin = () => {
      setIsShown(false);
      setActive(false)
     }
     
     const showSignUp = () => {
      setIsShown(true);
      setActive(true)
      
     }
    
     
     
     useEffect(() => {
       setActive(false)
     
     }, [])


  return (
    <Container maxWidth="lg">
    <Box sx={{ bgcolor: 'white', height: '100vh' , mx:'auto'}} >
       <div className='gpt3__check-login'>
       <div className='gpt3__check-img'>
       
        <div className='gpt3__check-image'>
          <img src={checkLogo} alt="check-retail-logo" />
        </div>
        
        <div className='gpt3__check-img_text'>
           <h5>RETAIL</h5>
        </div>
        
       </div>  
       
       <div className='gpt3__check-auth-btn'>
        <button  className={active ? undefined : "active" } onClick={showLogin}>Login</button>
        <button className={active ? "active" : undefined} onClick={showSignUp}>Sign Up</button>
       </div>
       
       {!isShown &&   (
       <Formik  initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >
       { (props) => (
          <Form>
                <div className='gpt3__login-form-box'>
         
         <div>
         <FormControl sx={{ m: 1,
         width: "327px" ,
         maginX:"auto"
         }} variant="outlined" >
         <Typography htmlFor="input" sx={{ paddingX:{xs:"15px" ,sm:"0px" ,md:"0px"}, fontWeight:600 , marginBottom:'2ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Email Address</Typography>
          <Field as={TextField}
            sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
            required
            helperText={<ErrorMessage name="email"/>}
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
         <FormControl sx={{ m: 1, width: '327px'  }} >
             <Typography htmlFor="input" sx={{ paddingX:{xs:"15px",sm:"0px" ,md:"0px"} ,fontWeight:600 , marginBottom:'2ch' , fontFamily:"raleWay" , fontSize:"16px"}}>Password</Typography>
          <Field as={TextField}
               sx={{
                width: { xs: "300px", sm: "200px", md: "327px" },
                mx:"auto"
            }}
               required
               placeholder='Enter your Password'
               name='password'
               id="password-input"
               type={showPassword ? 'text' : 'password'}
               helperText={<ErrorMessage name="password"/>}
               
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
        </FormControl>
         </div>

        <div className='gpt3__check-forget'>
        <Link  to="/forgetpassword">
            Forget Password?
        </Link>
        </div>
        
        
        <div className='gpt3__check-button'>
        <button type='submit' disabled={props.isSubmitting}>{ props.isSubmitting ? <CircularProgress size="1.2rem" color="inherit" /> : "Login"}</button>
        </div>
        
        <div className='gpt3__check-register-link'>
         <p>Dont't have an account yet?</p>
         <span  style={regStyle}  onClick={showSignUp}>Register</span>
        </div>
        
        
      </div>
          
          </Form>
       )}
       </Formik>
       )}
       
       { isShown && <Basic setIsShown={setIsShown} setActive={setActive} />}
       
       </div>
    
    </Box>
  </Container>
  )
}

export default Login
