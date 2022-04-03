import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTasksAsync } from "../store/slice";

import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
  StyledCheck,
  StyledCross,
  StyledGear,
} from "../styles/taskListStyles";

const TodoList = () => {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskFilter, setTaskFilter] = useState("All");

  const handleFilter = (e) => {
    setTaskFilter(e.target.value);
  };

  const displayFilter = (task) => {
    return taskFilter === "All"
      ? task
      : taskFilter === "Active"
      ? !task.completed
      : task.completed;
  };

  console.log(taskFilter);

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
    <Accordion type="multiple">
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="form-control mb-2 mr-sm-2"
          onChange={handleFilter}
        >
          <option defaultChecked value="All">
            All
          </option>
          <option value="Completed">Completed</option>
          <option value="Active">Active</option>
        </select>
      </div>
      <h3>{taskFilter} Tasks</h3>
      {taskList
        .filter((task) => displayFilter(task))
        .map((task) => (
          <TodoItem
            id={task.id}
            title={task.title}
            category={task.category}
            priority={task.priority}
            deadline={task.deadline}
            description={task.description}
            completed={task.completed}
          />
        ))}
    </Accordion>
  );
};

export default TodoList;

//  <ul className="list-group">

// </ul>
