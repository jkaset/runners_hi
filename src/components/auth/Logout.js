import React from 'react'
import { Link } from "react-router-dom"


export const Logout = () => {
  
  return <Link to="/login" onClick={sessionStorage.removeItem('runnersHi_user')}>Sign out</Link>
}
