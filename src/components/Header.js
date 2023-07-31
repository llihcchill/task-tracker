import React from "react";
import PropTypes from "prop-types";
import Button from "./Button"

// variable into a function (arrow function)
const Header = ({title}) => {
  // you can input props into the function part of an arrow function

  /* for inline styling, use double curly brackets:

     style={{ color: }}

     and then input the string of the styling wanted:

     style={{ color: "red", backgroundColor: "black" }}

     (also React uses camel case for CSS and HTML stuff, replaces hyphens (-)) */

  return (
    <header>
      <h1>{title}</h1>
      <Button />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/* you can also create a variable to hold the
   styles and reference it in one curly bracket
   in the style element in the JSX element:

    style={headingStyle}

*/

// keeping this for later
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// }

// how to set default props:
/* ------------------------
the {component}.defaultProps function can be used:

Header.defaultProps = {
  title: "Task Tracker",
}
   ------------------------ */

// what are prop types?
/* --------------------
they aren't used the most often but
are good to know

first you need to import PropTypes:

  import PropTypes from "prop-types";

and then you can change the data type
of props on your component by going:

  Header.propTypes = {
    // make it an object
    // i'm going to set it to a string:

    title: PropTypes.string, // make sure to keep the comma
  }

if you input a data type that is not
the data type of the prop that you've set,
the prop will still render, but you will
get an error in the console. UNLESS,
you add .isRequired to the end of
PropTypes.string(.isRequired)

useful for catching errors
   -------------------- */

export default Header;
