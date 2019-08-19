export const ADD_TO_WATCH_LATER = "[to-watch] add to watch later";
export const REMOVE_FROM_LIST = "[to-watch] remove from list";

export const addToWatch = payload => {
  return {
    type: ADD_TO_WATCH_LATER,
    payload
  };
};

export const removeFromList = payload => {
  return {
    type: REMOVE_FROM_LIST,
    payload
  };
};
