import { getMoviesUrl, typeMapping } from "../../config";

export const FETCH_DETAILS = "[details] Fetching movies";
export const FETCHED_DETAILS = "[details] Fetched movies";
export const FETCHED_ERROR_DETAILS = "[details] Fetched movies detail";

export const startFetchingDetails = () => {
  return {
    type: FETCH_DETAILS
  };
};

export const fetchedDetails = payload => {
  return {
    type: FETCHED_DETAILS,
    payload
  };
};

export const fetchedDetialsError = payload => {
  return {
    type: FETCHED_ERROR_DETAILS,
    payload
  };
};

export const getDetails = (query, type = typeMapping.id) => dispatch => {
  dispatch(startFetchingDetails());

  fetch(getMoviesUrl(query, type))
    .then(response => response.json())
    .then(detials => dispatch(fetchedDetails(detials)));
};
