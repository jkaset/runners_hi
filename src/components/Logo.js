import React from 'react'
import './Logo.css'
import logo from './images/logo.png'
import {Logout} from './auth/Logout'
export const Logo = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Runner's Hi" height="98"/>
        <Logout />
      </header>
    </>
  )
}