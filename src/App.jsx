import { useState } from 'react'
import { BrowserRouter} from 'react-router-dom';
import Routess from './containers/Routess';
import './App.css'

function App() {

  return (
     <BrowserRouter>
       <Routess/>
     </BrowserRouter>
  )
}

export default App
