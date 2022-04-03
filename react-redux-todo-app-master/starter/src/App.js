import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTaskContainer from "./components/AddTaskContainer";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>Weekr Task List</h1>
      <AddTaskContainer />
      <TodoList />
      <TotalCompleteItems />
      <Toaster />
    </div>
  );
};

export default App;
