import React from 'react'
import './Logo.css'
import logo from './images/logo.png'
import { Logout } from './auth/Logout'
import { Col, Row, Container} from "react-bootstrap"
export const Logo = () => {
  return (
    <>
      <header>
       <img src={logo} alt="Runner's Hi" height="90%" />
          <div className="logout float-right"><Logout /></div> 
      </header>
    </>
  )
}
  