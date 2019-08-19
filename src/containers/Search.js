import { connect } from "react-redux";
import Search from "../components/Search/Search";
import { getMovies } from "../redux/movies/actions";
import { addToWatch } from "../redux/to-watch/actions";

// const mapState = ({ movies: { movies } }) => ({ movies });

const mapState = ({ movies, toWatch }) => {
  return {
    movies: movies.movies,
    loading: movies.loading,
    toWatch: toWatch
  };
};

const mapDispatch = dispatch => {
  return {
    getMovies: (query, type) => dispatch(getMovies(query, type)),
    addToWatch: (id, title) => dispatch(addToWatch(id, title))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Search);
