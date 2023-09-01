import CreateTask from "./components/CreateTask/CreateTask";
import Todolist from "./components/RenderTask/TodoList";

import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);

  const editTaskById = (id, newTitle) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, title: newTitle}
      }

      return task;
    });

    setTask(updateTasks);
  }

  const deleteTaskById = (id) => {
    const updateTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(updateTasks);
  };



  const createTask = (title) => {
    const updateTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 99999999),
        title,
        status: false,
      },
    ];
    setTask(updateTasks);
  };

  return (
    <section className="Todolist-contain">
      <h1>Todolist</h1>
      <div className="TaskForm">
        <div className="Task-Content">
          <div className="form-task">
            <CreateTask onCreate={createTask}  />
          </div>
          <div className="task-list">
            <Todolist tasks={tasks} onEdit={editTaskById} onDelete={deleteTaskById}/>
          </div>
          <p className="task-length">
            {tasks.length <= 1
              ? `You have ${tasks.length} Task`
              : `You have ${tasks.length} Tasks`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;