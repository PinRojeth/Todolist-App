import { useState } from "react";
import "./CreateTask.css";

// eslint-disable-next-line react/prop-types
function CreateTask({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    if (title) {
      onCreate(title);
      setTitle("");
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleCreate} className="form-create">
      <input
        className="input-task"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="What is your task today ?"
        required
      />
      <button className="button-create" type="submit">
        Create
      </button>
    </form>
    </div>
  );
}

export default CreateTask;
