import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync } from "../store/slice";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const taskList = useSelector((state) => state);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTaskAsync({
        title,
        category,
        deadline,
        priority,
        description,
        //   created: ,
        completed: false,
      })
    );
  };
  console.log(taskList);

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <div>
        <label htmlFor="task">Task</label>
        <input
          className="form-control mb-2 mr-sm-2"
          type="text"
          name="task"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          className="form-control mb-2 mr-sm-2"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Please select category</option>
          <option value="weekday">Weekday</option>
          <option value="weekend">Weekend</option>
        </select>
      </div>
      <div>
        <label htmlFor="deadline">Deadline</label>
        <input
          className="form-control mb-2 mr-sm-2"
          type="date"
          name="deadline"
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select
          className="form-control mb-2 mr-sm-2"
          name="priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Please select priority</option>
          <option value="high">High</option>
          <option value="medium">Standard</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          className="form-control mb-2 mr-sm-2"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-2" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
