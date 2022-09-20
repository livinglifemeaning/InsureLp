import Feature from "./Feature/Feature"; 
import classes from "./Features.module.css";
import featuresData from "./featureData.json";
const Features = () => {
  return <div className={classes.features}>
    {featuresData.map(feature => <Feature title={feature.title} paragraph={feature.paragraph} index={feature.index} key={feature.index}/>)}
  </div>;
};

export default Features;
