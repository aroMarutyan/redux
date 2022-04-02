import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  completeTaskAsync,
  deleteTaskAsync,
  editTaskAsync,
} from "../store/slice";

import EditTaskForm from "./EditTaskForm";
import TaskItemView from "./TaskItemView";

const TodoItem = (props) => {
  const { title, category, priority, deadline, description, completed, id } =
    props;
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(completeTaskAsync({ id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTaskAsync({ id }));
  };

  const handleEditClick = () => {
    setEdit((v) => !v);
  };

  useEffect(() => setEdit(false), []);

  return (
    <>
      {edit ? (
        <>
          <EditTaskForm props={props} />
          <button className="btn btn-warning" onClick={handleEditClick}>
            Edit
          </button>
        </>
      ) : (
        <li
          className={`list-group-item ${
            completed && "list-group-item-success"
          }`}
        >
          <div className="d-flex justify-content-between">
            <TaskItemView props={props} />
            {/* <div className="d-flex flex-column justify-content-between">
              <span>
               
                {title}
              </span>
              <span>{category}</span>
              <span>{priority}</span>
              <span>{deadline}</span>
              <span>{description}</span>
            </div> */}
            <div className="d-flex justify-content-evenly">
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
              <button className="btn btn-warning" onClick={handleEditClick}>
                Edit
              </button>
              <button className="btn btn-success" onClick={handleCompleteClick}>
                Complete
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;
