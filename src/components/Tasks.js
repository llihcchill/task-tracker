const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
    // tasks.map() creates a list from an array
  )
}

export default Tasks
