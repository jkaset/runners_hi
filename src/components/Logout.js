import React from 'react'


export const Logout = () => {
  return <a href="/login" onClick={sessionStorage.removeItem('runnersHi_user')} >Sign out</a>
}
