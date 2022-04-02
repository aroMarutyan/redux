import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   completeTaskAsync,
//   deleteTaskAsync,
//   editTaskAsync,
// } from "../store/slice";

const TaskItemView = ({ props }) => {
  const { title, category, priority, deadline, description, completed } = props;
  // const [edit, setEdit] = useState(false);
  // const dispatch = useDispatch();

  // const handleCompleteClick = () => {
  //   dispatch(completeTaskAsync({ id, completed: !completed }));
  // };
  // const handleDeleteClick = () => {
  //   dispatch(deleteTaskAsync({ id }));
  // };

  // const handleEditClick = () => {
  //   setEdit((v) => !v);
  // };

  return (
    <ul className={`ulst-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <span>
            {/* <input type="checkbox" className="mr-3" checked={completed}></input> */}
            {title}
          </span>
          <span>{category}</span>
          <span>{priority}</span>
          <span>{deadline}</span>
          <span>{description}</span>
        </div>
      </div>
    </ul>
  );
};

export default TaskItemView;
