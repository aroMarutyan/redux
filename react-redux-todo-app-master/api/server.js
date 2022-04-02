const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let tasks = [
  {
    id: nanoid(),
    title: "Test 1222f",
    category: "weekday",
    priority: "high",
    deadline: "2022-04-06",
    description: "This is ridiculous",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Test 2ss",
    category: "weekday",
    priority: "medium",
    deadline: "2022-04-06",
    description: "This is ridiculous",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Test 42ss",
    category: "weekday",
    priority: "low",
    deadline: "2022-04-06",
    description: "This is ridiculous",
    completed: true,
  },
];

app.get("/tasks", (req, res) => res.send(tasks));

app.post("/tasks", (req, res) => {
  const task = {
    title: req.body.title,
    id: nanoid(),
    category: req.body.category,
    priority: req.body.priority,
    deadline: req.body.deadline,
    description: req.body.description,
    completed: false,
  };
  tasks.push(task);
  return res.send(task);
});

app.patch("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((task) => task.id == id);
  const completed = Boolean(req.body.completed);
  const title = req.body.title;
  const category = req.body.category;
  const priority = req.body.priority;
  const deadline = req.body.deadline;
  const description = req.body.description;
  if (index > -1) {
    tasks[index].completed = completed;

    if (title) {
      tasks[index].title = title;
    }
    if (category) {
      tasks[index].category = category;
    }
    if (priority) {
      tasks[index].priority = priority;
    }
    if (deadline) {
      tasks[index].deadline = deadline;
    }
    if (description) {
      tasks[index].description = description;
    }
  }
  return res.send(tasks[index]);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((todo) => todo.id == id);
  if (index > -1) {
    tasks.splice(index, 1);
  }

  res.send(tasks);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
