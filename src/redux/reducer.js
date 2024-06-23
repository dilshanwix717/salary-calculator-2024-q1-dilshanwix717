// reducers.js
import { MARK_COMPLETED, MARK_INCOMPLETE } from "./actionTypes";

const initialState = { todos: [], filter: "ALL", searchTerm: "" };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
