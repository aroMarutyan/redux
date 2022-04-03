import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskAsync } from "../store/slice";

import notify from "../tools/toast";
// import { Toaster } from "react-hot-toast";

const EditTaskForm = ({ props }) => {
  const {
    title: parentTitle,
    category: parentCategory,
    priority: parentPriority,
    deadline: parentDeadline,
    description: parentDescription,
    completed: parentCompleted,
    id,
  } = props;

  const [title, setTitle] = useState(parentTitle);

  const [category, setCategory] = useState(parentCategory);
  const [deadline, setDeadline] = useState(parentDeadline);
  const [priority, setPriority] = useState(parentPriority);
  const [description, setDescription] = useState(parentDescription);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTaskAsync({
        id,

        title: title,
        category: category,
        deadline: deadline,
        priority: priority,
        description: description,
        completed: parentCompleted,
      })
    );
    notify("Task Edited", "🔧");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <div>
        <label htmlFor="task">Task</label>
        <input
          className="form-control mb-2 mr-sm-2"
          type="text"
          name="task"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          className="form-control mb-2 mr-sm-2"
          name="category"
          value={category}
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
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select
          className="form-control mb-2 mr-sm-2"
          name="priority"
          value={priority}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-2" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditTaskForm;
