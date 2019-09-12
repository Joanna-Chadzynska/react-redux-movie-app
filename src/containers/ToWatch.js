import { connect } from "react-redux";
import ToWatch from "../components/ToWatch";

import { addToWatch, removeFromList } from "../redux/to-watch/actions";

const mapState = (state, ownProps) => {
  return {
    toWatch: state.toWatch.favorite,
    id: ownProps.match.params.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    addToWatch: (item) => dispatch(addToWatch(item)),
    removeFromList: (item) => dispatch(removeFromList(item))
  };
};

export default connect(
  mapState,
  mapDispatch
)(ToWatch);
