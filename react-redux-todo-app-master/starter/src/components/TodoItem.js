import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { completeTaskAsync, deleteTaskAsync } from "../store/slice";

import EditTaskForm from "./EditTaskForm";
import TaskItemView from "./TaskItemView";

import {
  StyledCheck,
  StyledCross,
  StyledWarning,
  StyledGear,
} from "../styles/taskListStyles";

import notify from "../tools/toast";
import { Toaster } from "react-hot-toast";

const TodoItem = (props) => {
  const { title, category, priority, deadline, description, completed, id } =
    props;
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(completeTaskAsync({ id, completed: !completed }));
    !completed && notify("Task Completed", "👏");
  };
  const handleDeleteClick = () => {
    dispatch(deleteTaskAsync({ id }));
    notify("Task Deleted", "❌");
  };

  const handleEditClick = () => {
    setEdit((v) => !v);
  };

  function getDifferenceInDays(date1, date2) {
    const diffInMs = date2 - date1;
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result < 1 && result > 0 ? "orange" : result <= 0 ? "red" : "";
  }
  const dead = Date.parse(deadline);
  const today = Date.now();

  const warning = getDifferenceInDays(today, dead);

  useEffect(() => setEdit(false), []);

  return (
    <>
      {edit ? (
        <>
          <EditTaskForm props={props} />
          {/* <button className="btn btn-warning" onClick={handleEditClick}>
            Edit
          </button> */}
        </>
      ) : (
        <li
          className={`list-group-item ${
            completed && "list-group-item-success"
          }`}
        >
          <div className="d-flex justify-content-between">
            <TaskItemView props={props} />
          </div>
        </li>
      )}
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          <StyledCross />
        </button>
        <Toaster />
        <button className="btn btn-warning" onClick={handleEditClick}>
          <StyledGear />
        </button>
        <button className="btn btn-success" onClick={handleCompleteClick}>
          <StyledCheck />
        </button>
        <StyledWarning color={warning} />
      </div>
      <br
        style={{ margin: "20px", backgroundColor: "red", height: "200px" }}
      ></br>
    </>
  );
};

export default TodoItem;
