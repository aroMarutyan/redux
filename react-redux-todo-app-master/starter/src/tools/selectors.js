import { createSelector } from "reselect";

export const selectActiveTasks = createSelector(
  (state) => state.tasks,
  (tasks) => tasks.filter((task) => !task.completed)
);
export const selectCompletedTasks = createSelector(
  (state) => state.tasks,
  (tasks) => tasks.filter((task) => task.completed)
);
export const selectWeekdayTasks = createSelector(
  (state) => state.tasks,
  (tasks) => tasks.filter((task) => task.category === "Weekday")
);
export const selectWeekendTasks = createSelector(
  (state) => state.tasks,
  (tasks) => tasks.filter((task) => task.category === "Weekend")
);
