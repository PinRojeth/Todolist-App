import "./TaskDisplay.css";
import ButtonEdit from "../../assets/edit.svg";
import ButtonDelete from "../../assets/bi_trash.svg";
import { useState } from "react";
import EditTask from "../EditTask/EditTask";

// eslint-disable-next-line react/prop-types
function TaskShow({ task, onEdit, onDelete }) {
  const [edit, setEdit] = useState(false);
  const [iconDisplay, setIconDisplay] = useState(true);
  const [status, setStatus] = useState(false);

  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    onDelete(task.id);
    setIconDisplay(!iconDisplay);
  };

  const handleModify = () => {
      setEdit(!edit);
      setIconDisplay(!iconDisplay);
  };

  const handleSubmit = (id, newTitle) => {
    setEdit(false);
    onEdit(id, newTitle);
    setIconDisplay(true);
  };

  const handleStatus = () => {
    setStatus(!status);
  };
  // eslint-disable-next-line react/prop-types
  let content = <p>{task.title}</p>;

  if (edit) {
    content = <EditTask onSubmit={handleSubmit} task={task} />;
  }

  return (
    <article className="task-box">
      <div className="content-task">
        <input type="checkbox" className="checkbox" checked={status} onChange={handleStatus} />
        <span className="content-show">
          {status ? <s className="">{content}</s> : <p>{content}</p>}
        </span>
      </div>
      {iconDisplay && (<div className="btn">
        <button className="btn-edit">
          <img
            src={ButtonEdit}
            alt="Button that allow you to Modify Task"
            onClick={handleModify}
          />
        </button>
        <button className="btn-remove">
          <img
            src={ButtonDelete}
            alt="Button that allow you to Delete Task"
            onClick={handleDelete}
          />
        </button>
      </div>
      )}
    </article>
  );
}

export default TaskShow;