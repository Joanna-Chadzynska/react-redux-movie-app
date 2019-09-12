import { ADD_TO_WATCH_LATER, REMOVE_FROM_LIST } from "./actions";

const initialState = {
  favorite: []
};

export const toWatch = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCH_LATER:
      return Object.assign({}, state, {
        favorite: [
          ...state.favorite.filter(
            (item) => item.imdbID !== action.payload.imdbID
          ),
          action.payload
        ]
      });

    case REMOVE_FROM_LIST:
      return Object.assign({}, state, {
        favorite: [
          ...state.favorite.filter(
            (item) => item.imdbID !== action.payload.imdbID
          )
        ]
      });
    default:
      return state;
  }
};
