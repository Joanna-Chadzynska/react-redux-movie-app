import {
  FETCHED_DETAILS,
  FETCHED_ERROR_DETAILS,
  FETCH_DETAILS
} from "./actions";

const initState = {
  loading: false,
  details: [],
  error: ""
};

export const details = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_DETAILS:
      return {
        loading: false,
        details: action.payload
      };
    case FETCHED_ERROR_DETAILS:
      return {
        details: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
