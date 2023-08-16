import React from 'react'
import { Link } from 'react-router-dom'
import logotype from "../assets/logo.svg"
import "./scss/logo.scss"
export const Logo = () => {
  return (
    <Link to="/"  className='linksa'
    style={{color:"#0991DE",fontWeight:"bold"}}>
        <img src={logotype} alt="CryptoLogo" 
            className="imgs"
       />
        <span>CryptoApp</span>
    </Link>
  )
}
