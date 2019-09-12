import { connect } from "react-redux";
import Search from "../components/Search/Search";
import { getMovies } from "../redux/movies/actions";
import { addToWatch, removeFromList } from "../redux/to-watch/actions";

// const mapState = ({ movies: { movies } }) => ({ movies });

const mapState = ({ movies, toWatch }, ownProps) => {
  return {
    movies: movies.movies,
    loading: movies.loading,
    toWatch: toWatch,
    id: ownProps.match.params.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    getMovies: (query, type) => dispatch(getMovies(query, type)),
    addToWatch: (item) => dispatch(addToWatch(item)),
    removeFromList: (item) => dispatch(removeFromList(item))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Search);
