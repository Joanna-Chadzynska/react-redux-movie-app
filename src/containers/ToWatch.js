import { connect } from "react-redux";
import ToWatch from "../components/ToWatch";
import { getDetails } from "../redux/details/actions";

const mapState = ({ movies, toWatch, details }) => {
  return {
    movies: movies.movies,
    toWatch: toWatch,
    detail: details
  };
};

const mapDispatch = dispatch => {
  return {
    getDetails: (query, type) => dispatch(getDetails(query, type))
  };
};

export default connect(
  mapState,
  mapDispatch
)(ToWatch);
