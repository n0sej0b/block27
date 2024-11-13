import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import { useState } from "react";

import './App.css'

function app() {
  const [token,setToken] = useState(null);

  return(
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate toek={token} setToken={setToken} />
    
    
    </>
  );
}

export default function App() {
  return (


 
    <>
    <Authenticate/>
    <SignUpForm/>

    
      
    </>
  );
}


