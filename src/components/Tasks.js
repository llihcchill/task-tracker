import Task from "./Task"

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
    // tasks.map() creates a list from an array
  )
}

export default Tasks
