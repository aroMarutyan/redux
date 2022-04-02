import React from "react";
import { useSelector } from "react-redux";
import { selectCompletedTasks, selectActiveTasks } from "../store/slice";

const TotalCompleteItems = () => {
  const taskList = useSelector((state) => state);
  const completedTasks = selectCompletedTasks(taskList);
  const activeTasks = selectActiveTasks(taskList);

  return (
    <>
      <h4 className="mt-3">Total Complete Tasks: {completedTasks.length}</h4>
      <h4 className="mt-3">Total Active Tasks: {activeTasks.length}</h4>
    </>
  );
};

export default TotalCompleteItems;
