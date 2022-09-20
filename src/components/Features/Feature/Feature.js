import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import SnappyProcess from "../../../assets/icon-snappy-process.svg"; 
import  AffordablePrices from "../../../assets/icon-affordable-prices.svg"; 
import  PeopleFirst from "../../../assets/icon-people-first.svg"; 
import classes from "./Feature.module.css"; 
const IMAGES = [SnappyProcess, AffordablePrices, PeopleFirst]

const Feature = (props) => {
  return (
    <div className={classes.feature}>
      <div className={classes.image}>
        <img src={IMAGES[props.index]} alt=""/>
      </div>
      <Title color="dark" type="small">{props.title}</Title>
      <Paragraph color="dark">{props.paragraph}</Paragraph>
    </div>
  )
}

export default Feature
