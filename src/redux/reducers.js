import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { movies } from "./movies/reducers";
import { details } from "./details/reducers";
import { toWatch } from "./to-watch/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toWatch"]
};

const rootReducer = combineReducers({
  details,
  movies,
  toWatch
});

export default persistReducer(persistConfig, rootReducer);
