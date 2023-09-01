import TaskShow from "../TaskDisplay/TaskDisplay";
// eslint-disable-next-line react/prop-types
function Todolist({ tasks, onEdit, onDelete }) {
  // eslint-disable-next-line react/prop-types
  const renderedTasks = tasks.map((task) => {
    return (
      <TaskShow onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />
    );
  });
  return <div>{renderedTasks}</div>;
}

export default Todolist;