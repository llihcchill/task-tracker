// the "from" syntax pretty much names the file
// example: const header = Header.header()
import Header from "./components/Header";

// how to use a class instead of using a function:
/* ------------------
first you need to import React:

  import React from "react";

then using the React library, you can declare the class,
but then you want to add more methods and functions
(like the lifecycle methods) by using the keyword "extends"

  class App extends React.Component {
    // render() takes care of the output
    render() {
      // return whatever JSX you want
      return(
        <h1>
          some message
        </h1>
      )
    }
  }
   ------------------ */

function App() {

  // the <div className="container"> can be any one html element,
  // it could be a fragment (<> </>) or a <div> like it is
  return (
    <div className="container">
      <Header title="Task Tracker" />
    </div>
  );
}

export default App;
