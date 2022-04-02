import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
    <Accordion type="multiple">
      <h3>Active Tasks</h3>
      {taskList.map((task) => (
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
