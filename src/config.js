export const API_KEY = "81d695b0";
export const typeMapping = {
  id: "i",
  type: "type",
  title: "t",
  search: "s"
};
export const getMoviesUrl = (query, type) =>
  `http://www.omdbapi.com/?${type}=${query}&plot=full&apikey=${API_KEY}`;
