// variable into a function (arrow function)
const Header = ({title}) => {
  // you can input props into the function part of an arrow function
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

// how to set default props:
/* ------------------------
the {component}.defaultProps function can be used:

Header.defaultProps = {
  title: "Task Tracker";
}
   ------------------------ */

export default Header;
