import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTasksAsync } from "../store/slice";

const TodoList = () => {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
    <ul className="list-group">
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
    </ul>
  );
};

export default TodoList;
