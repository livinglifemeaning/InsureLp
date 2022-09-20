import React, { useContext } from 'react'
import { MediaContext } from '../../App';
import Logo from '../Logo/Logo';
import FooterNav from './FooterNav/FooterNav';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar';
import AccentDesktop from "../../assets/bg-pattern-footer-desktop.svg";
import AccentMobile from "../../assets/bg-pattern-footer-mobile.svg";
import classes from "./Footer.module.css"; 

const Footer = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={classes.footer}>
      
      <div className={classes.footing}>
      <Logo/>
      <SocialMediaBar/>
      
      </div>
      <div className={classes.separator}/>
      <FooterNav/>
      <img src={isDesktop ? AccentDesktop : AccentMobile} alt="" className={classes.accent}/>
    </div>
  )
}

export default Footer
