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

import {
  displayStatusFilter,
  displayCategoryFilter,
  headlineChanger,
  displayFilter,
} from "../tools/taskListFilters";

// import { selectWeekdayTasks, selectWeekendTasks } from "../store/slice";

const TodoList = () => {
  const taskList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [taskStatusState, setTaskStatusState] = useState("All");
  const [taskCategoryState, setTaskCategoryState] = useState("All");
  const [headline, setHeadline] = useState("All");

  const handleStatusFilter = (e) => {
    setTaskStatusState(e.target.value);
  };
  const handleCategoryFilter = (e) => {
    setTaskCategoryState(e.target.value);
  };

  //   console.log(selectWeekdayTasks(taskList));

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  useEffect(() => {
    headlineChanger(taskStatusState, taskCategoryState, setHeadline);
  }, [taskStatusState, taskCategoryState]);

  return (
    <Accordion type="multiple">
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          className="form-control mb-2 mr-sm-2"
          onChange={handleStatusFilter}
        >
          <option defaultChecked value="All">
            All
          </option>
          <option value="Completed">Completed</option>
          <option value="Active">Active</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="form-control mb-2 mr-sm-2"
          onChange={handleCategoryFilter}
        >
          <option defaultChecked value="All">
            All
          </option>
          <option value="Weekday">Weekday</option>
          <option value="Weekend">Weekend</option>
        </select>
      </div>
      <h3>{headline} Tasks</h3>

      {displayFilter(taskList, taskStatusState, taskCategoryState).length ? (
        displayFilter(taskList, taskStatusState, taskCategoryState).map(
          (task) => (
            <TodoItem
              id={task.id}
              title={task.title}
              category={task.category}
              priority={task.priority}
              deadline={task.deadline}
              description={task.description}
              completed={task.completed}
            />
          )
        )
      ) : (
        <h4>No {headline} Tasks... </h4>
      )}
    </Accordion>
  );
};

export default TodoList;

//  <ul className="list-group">

// </ul>
