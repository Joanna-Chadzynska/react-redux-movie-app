import { ADD_TO_WATCH_LATER } from "./actions";

export const toWatch = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WATCH_LATER:
      const copy = [...state, action.payload];
      return copy;

    default:
      return state;
  }
};
