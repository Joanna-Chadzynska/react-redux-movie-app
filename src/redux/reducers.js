import { combineReducers } from "redux";
import { movies } from "./movies/reducers";
import { details } from "./details/reducers";
import { toWatch } from "./to-watch/reducers";
export default combineReducers({
  details,
  movies,
  toWatch
});
