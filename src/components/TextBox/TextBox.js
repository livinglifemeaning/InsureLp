import classes from "./TextBox.module.css"; 

const TextBox = (props) => {
  return (
    <div className={classes.textBox}>
      {props.children}
    </div>
  )
}

export default TextBox
