import FacebookIcon from '../Icon/FacebookIcon';
import TwitterIcon from "../Icon/TwitterIcon"; 
import PinterestIcon from "../Icon/PinterestIcon"; 
import InstagramIcon from '../Icon/InstagramIcon';
import classes from "./SocialMediaBar.module.css"; 

const SocialMediaBar = () => {
    let color = "hsl(273, 4%, 51%)"; 
    let hoverColor = "hsl(256, 26%, 20%)"; 
  return (
    <div className={classes.bar}>
      <FacebookIcon color={color} hoverColor={hoverColor} />
      <TwitterIcon color={color} hoverColor={hoverColor} />
      <PinterestIcon color={color} hoverColor={hoverColor} />
      <InstagramIcon color={color} hoverColor={hoverColor} />
    </div>
  )
}

export default SocialMediaBar
