import { FETCH_MOVIES, FETCHED_MOVIES, FETCHED_ERROR } from "./actions";

const initState = {
  loading: false,
  movies: [],
  error: ""
};

export const movies = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true
      };
    case FETCHED_MOVIES:
      return {
        loading: false,
        movies: action.payload
      };
    case FETCHED_ERROR:
      return {
        movies: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
