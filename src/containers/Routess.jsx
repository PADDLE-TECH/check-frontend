import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Login from '../paths/login/Login'
import SignUp from '../components/signup/SignUp'
import Home from '../Paths/home/Home'
import Transaction from '../Paths/transaction/Transaction'
import Scan from '../Paths/scan/Scan'
import Cart from '../Paths/cart/Cart'
import Profile from '../Paths/profile/Profile'
import PayBills from '../Paths/pay-bills/PayBills'
import Wallet from '../Paths/walllet/Wallet'
import Fwallet from '../Paths/fwallet/Fwallet'
import Wtransfer from '../Paths/wtransfer/Wtransfer'
import Frecharge from '../Paths/frecharge/Frecharge'

const Routess = () => {
  return (
    <div>
    <Routes>
     <Route  index path="/"   element={<Login/> }   />
     <Route   path="/signup"   element={<SignUp/> }   />
     <Route  index path="/home"   element={<Home/> }   />
     <Route  index path="/transactions"   element={<Transaction/> }   />
     <Route  index path="/scan"   element={<Scan/> }   />
     <Route  index path="/cart"   element={<Cart/> }   />
     <Route  index path="/profile"   element={<Profile/> }   />
     <Route   path="/home/paybills"   element={<PayBills/> }   />
     <Route  path='/wallet' element={<Wallet/>} />
     <Route   path='/fwallet' element={<Fwallet/>}  />
     <Route   path='/wtransfer' element={<Wtransfer/>}  />
     <Route   path='/frecharge' element={<Frecharge/>}  />
    </Routes>
    
      
    </div>
  )
}

export default Routess
