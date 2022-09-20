import classes from "./Button.module.css"; 
const Button = (props) => {
  return (
    <div className={`${classes.btn} ${props.color === "light" ? classes.light : classes.dark}`}>
      {props.children}
    </div>
  )
}

export default Button
