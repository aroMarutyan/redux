import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

import { localServer, remoteServer } from "../config/serverConfig";

let activeServer = localServer;

// Async API func
// Add try-catch
export const getTasksAsync = createAsyncThunk(
  "tasks/getTasksAsync",
  async () => {
    const res = await fetch(activeServer);
    if (res.ok) {
      const tasks = await res.json();
      return { tasks };
    }
  }
);

export const addTaskAsync = createAsyncThunk(
  "tasks/addTaskAsync",
  async (payload) => {
    const res = await fetch(activeServer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: nanoid(),
        title: payload.title,
        category: payload.category,
        priority: payload.priority,
        deadline: payload.deadline,
        description: payload.description,
        completed: false,
      }),
    });

    if (res.ok) {
      const task = await res.json();
      return { task };
    }
  }
);

export const completeTaskAsync = createAsyncThunk(
  "tasks/completeTaskAsync",
  async (payload) => {
    const res = await fetch(`${activeServer}/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (res.ok) {
      const task = await res.json();
      return { task };
    }
  }
);
export const editTaskAsync = createAsyncThunk(
  "tasks/editTaskAsync",
  async (payload) => {
    const res = await fetch(`${activeServer}/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify({ title: payload.title }),
      body: JSON.stringify({
        id: payload.id,
        title: payload.title,
        category: payload.category,
        priority: payload.priority,
        deadline: payload.deadline,
        description: payload.description,
        completed: payload.completed,
      }),
    });

    if (res.ok) {
      const task = await res.json();
      console.log(task);
      return { task };
    }
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTaskAsync",
  async (payload) => {
    const res = await fetch(`${activeServer}/${payload.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return { id: payload.id };
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],

  // The main reducers seem unnecessary.
  //  kind of a relief. I really didn't understand how they gelled with the async ones. Turns out they dont
  reducers: {
    // taskAdded: (state, action) => {
    //   const newTask = {
    //     id: nanoid(),
    //     title: action.payload.title,
    //     category: action.payload.category,
    //     priority: action.payload.priority,
    //     deadline: action.payload.deadline,
    //     description: action.payload.description,
    //     completed: false,
    //   };
    //   state.push(newTask);
    // },
    // taskCompleted: (state, action) => {
    //   const index = state.findIndex((task) => task.id === action.payload.id);
    //   state[index].completed = true;
    // },
    // // Needs more work
    // taskEdited: (state, action) => {
    //   const index = state.findIndex((task) => task.id === action.payload.id);
    //   const editTask = {
    //     title: action.payload.title,
    //     category: action.payload.category,
    //     priority: action.payload.priority,
    //     deadline: action.payload.deadline,
    //     description: action.payload.description,
    //   };
    //   state[index] = editTask;
    // },
    // taskDeleted: (state, action) => {
    //   return state.filter((task) => task.id !== action.payload.id);
    // },
    // tasksOrdered: (state, action) => {
    //   const sortByObject = action.payload.sortBy.reduce((obj, item, index) => {
    //     return {
    //       ...obj,
    //       [item]: index,
    //     };
    //   }, {});
    //   const sortedData = state.sort(
    //     (a, b) =>
    //       sortByObject[a[action.payload.sortField]] -
    //       sortByObject[b[action.payload.sortField]]
    //   );
    //   console.log(sortedData.tasks);
    //   return sortedData;
    // },
  },
  extraReducers: {
    [getTasksAsync.pending]: (state, action) => {
      return console.log("fetching data...");
    },
    [getTasksAsync.fulfilled]: (state, action) => {
      return action.payload.tasks;
    },
    [addTaskAsync.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.push(action.payload.task);
    },
    [completeTaskAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (task) => task.id === action.payload.task.id
      );
      console.log(state);

      state[index].completed = action.payload.task.completed;
    },
    [editTaskAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (task) => task.id === action.payload.task.id
      );
      const task = state[index];

      task.id = action.payload.task.id;
      task.title = action.payload.task.title;
      task.category = action.payload.task.category;
      task.priority = action.payload.task.priority;
      task.deadline = action.payload.task.deadline;
      task.description = action.payload.task.description;
      task.completed = action.payload.task.completed;

      //   console.log(action.payload);
      //   console.log(state[index].title);
      //   console.log(action.payload.task.title);
      //   state[index] = action.payload.task;
    },
    [deleteTaskAsync.fulfilled]: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export default taskSlice.reducer;

export const {
  taskAdded,
  taskCompleted,
  taskEdited,
  taskDeleted,
  tasksOrdered,
} = taskSlice.actions;
