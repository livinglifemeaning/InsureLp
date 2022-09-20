import React from 'react'
import SiteLogo from "./logo.svg"; 
import classes from "./Logo.module.css"; 
const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={SiteLogo} alt="Insure logo"/>
    </div>
  )
}

export default Logo
