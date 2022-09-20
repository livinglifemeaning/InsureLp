import classes from "./Paragraph.module.css"; 

const Paragraph = (props) => {
  return (
    <p className={`${classes.paragraph} ${props.color === "dark" ? classes.dark : classes.light}`}>
      {props.children}
    </p>
  )
}

export default Paragraph
