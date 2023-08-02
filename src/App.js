// the "from" syntax pretty much names the file
// example: const header = Header.header()
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "something to do",
      day: "Friday 17th of June",
      reminder: true,
    },
    {
      id: 2,
      text: "another thing to do",
      day: "Friday 17th of June",
      reminder: true,
    }
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // the <div className="container"> can be any one html element,
  // it could be a fragment (<> </>) or a <div> like it is
  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show..."}
    </div>
  );
  // you can implement logic statements in the return function via shorthand
  // versions of the statement
}

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

export default App
