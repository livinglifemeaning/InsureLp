import { useContext } from "react";
import { MediaContext } from "../../App";
import Title from "../Title/Title";
import Features from "../Features/Features"; 
import Button from "../Button/Button";
import WorkAccentDesktop from "../../assets/bg-pattern-how-we-work-desktop.svg"; 
import WorkAccentMobile from "../../assets/bg-pattern-how-we-work-mobile.svg"; 
import classes from "./Body.module.css";

const Body = () => {
  const isDekstop = useContext(MediaContext)
  return <div className={classes.body}>
    <div className={classes.separator}/>
    <Title color="dark" type="big">We're different</Title>
    <Features/>
    <div className={classes.workSection}>
      <div className={classes.workContent}>
      <Title type="big" color="light"> Find out more about how we work</Title>
      <Button color="light">How we work</Button>
      </div>
      <img src={isDekstop ? WorkAccentDesktop : WorkAccentMobile} alt="" className={classes.workAccent} />
    </div>
  </div>;
};

export default Body;
