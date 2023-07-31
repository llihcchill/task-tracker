import PropTypes from "prop-types";

const Button = ({ colour, text }) => {
  // make sure with props you don't put two entire ones in a row like this:
  // { colour }, { text }
  return <button className="btn" style={{ backgroundColor: colour }}>{text}</button>
  // make sure with the style as well you don't just put in the prop variable and not the
  // CSS attribute you want to actually change
}

Button.defaultProps = {
  text: "Add",
  colour: "green",
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  colour: PropTypes.string,
}

export default Button;
