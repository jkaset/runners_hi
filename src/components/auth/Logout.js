import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

export const Logout = () => {
  
  return <Link to="/login" className="btn btn-dark" onClick={sessionStorage.removeItem('runnersHi_user')}><FontAwesomeIcon icon={ faSignOutAlt }/></Link>
}
