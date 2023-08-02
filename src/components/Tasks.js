import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
    // tasks.map() creates a list from an array
  )
}

export default Tasks
