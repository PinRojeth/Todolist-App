import { useState } from "react";
import "./EditTask.css";

// eslint-disable-next-line react/prop-types
function EditTask({ task, onSubmit }) {
  // eslint-disable-next-line react/prop-types
  const [title, setTitle] = useState(task.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title) {
      // eslint-disable-next-line react/prop-types
      onSubmit(task.id, title);
    }
  };

  return (
    <section className="edit">
      <form className="Form-edit" onSubmit={handleSubmit}>
        <input
          className="input-edit"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button-save" onChange={handleChange}>
          <i className="fas fa-save fa-lg"></i>{" "}
        </button>
      </form>
    </section>
  );
}

export default EditTask;
