// import { compose, pipe } from "lodash/fp";

// import { Map } from "immutable";
// import { produce } from "immer";

// let book = { title: "Snow Crash" } ;

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }

// let updated = publish(book);

// console.log(book);
// console.log(updated);

import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });
// unsubscribe();
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
console.log(store.getState());
