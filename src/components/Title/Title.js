import classes from "./Title.module.css"
const Title = (props) => {
  return (
    <div className={`${classes.title} ${props.color === "light" ? classes.light : classes.dark} ${props.type === "big" ? classes.big : classes.small}`}>
      {props.children}
    </div>
  )
}

export default Title
