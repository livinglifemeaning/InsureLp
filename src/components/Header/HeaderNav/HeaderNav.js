import { useContext } from "react";
import { MediaContext } from "../../../App";
import classes from "./HeaderNav.module.css";
import Button from "../../Button/Button"; 
import Accent from "../../../assets/bg-pattern-mobile-nav.svg"; 
const HeaderNav = () => {
  const isDesktop = useContext(MediaContext); 
  let color; 
  isDesktop ? color = "dark" : color = "light"; 
  return (
    <div className={`${classes.nav} ${isDesktop ? classes.desktop : classes.mobile}`}>
      <div className={classes.content}>
      <p>How we work</p>
      <p>Blog</p>
      <p>Account</p>
      <Button color={color}>View Plans</Button>
      {!isDesktop && <img className={classes.accent} src={Accent} alt=""/>}
      </div>
    </div>
  )
}

export default HeaderNav
