import PropTypes from "prop-types";

const Button = ({ colour, text, onClick }) => {
  // make sure with props you don't put two entire ones in a row like this:
  // { colour }, { text }
  return <button className="btn" style={{ backgroundColor: colour }} onClick={onClick}>{text}</button>
  // make sure with the style as well you don't just put in the prop variable and not the
  // CSS attribute you want to actually change

  // this is also a good exmaple of sending data through props, as the onClick prop is created here,
  // and in the Header.js file, it references the onClick prop in the <Button /> tag, which is
  // then set to a function declared in the Header.js file:
  // <Button ... onClick={ onClick } ... />
}

Button.defaultProps = {
  text: "Add",
  colour: "green",
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  colour: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
