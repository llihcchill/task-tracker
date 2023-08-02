import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  )
  // for the onClick event, to get the real task id, instead of just returning the onDelete prop,
  // you turn it into a function (arrow function) and there you can pass in the {task.id} prop

  // also not to access props in the arrow function, you don't have to put extra curly brackets
  // around the prop

  // the div className= is essentially if the reminder attribute of the task (reminder: true) is true,
  // then it will change the class to "reminder" which adds a little green drape over the task, and if not,
  // it will return no class onto the div
}

export default Task
