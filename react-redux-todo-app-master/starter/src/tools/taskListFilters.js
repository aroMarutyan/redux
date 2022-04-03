import {
  selectActiveTasks,
  selectCompletedTasks,
  selectWeekdayTasks,
  selectWeekendTasks,
} from "./selectors";

export const displayStatusFilter = (store, state) => {
  console.log(store);
  return state === "All"
    ? store
    : state === "Active"
    ? { tasks: selectActiveTasks(store) }
    : { tasks: selectCompletedTasks(store) };
};
export const displayCategoryFilter = (store, state) => {
  console.log(store);
  return state === "All"
    ? store.tasks
    : state === "Weekday"
    ? selectWeekdayTasks(store)
    : selectWeekendTasks(store);
};

export const headlineChanger = (status, category, hook) => {
  const result =
    status === "All" && category === "All"
      ? "All"
      : category === "All"
      ? status
      : `${status} ${category}`;
  hook(result);
};

export const displayFilter = (store, statusState, categoryState) => {
  const statusFiltered = displayStatusFilter(store, statusState);
  const categoryFiltered = displayCategoryFilter(statusFiltered, categoryState);
  return categoryFiltered;
};
