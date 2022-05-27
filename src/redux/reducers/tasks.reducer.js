import { GET_TASKS, ADD_TASKS, DELETE_TASKS } from "../actions/tasks.actions";

const initialSatet = [];

export const taskReducer = (state = initialSatet, action) => {
  switch (action.type) {
    case GET_TASKS:
      return [...state, ...action.payload];
    case ADD_TASKS:
      return [...state, action.payload];
    case DELETE_TASKS:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};
