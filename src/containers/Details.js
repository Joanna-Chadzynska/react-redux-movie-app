import { connect } from "react-redux";
import Details from "../components/Details/Details";
import { getDetails } from "../redux/details/actions";
import { addToWatch, removeFromList } from "../redux/to-watch/actions";

const mapState = (state, ownProps) => {
  return {
    detail: state.details,
    id: ownProps.match.params.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    getDetails: (query, type) => dispatch(getDetails(query, type)),
    addToWatch: (item) => dispatch(addToWatch(item)),
    removeFromList: (item) => dispatch(removeFromList(item))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Details);
