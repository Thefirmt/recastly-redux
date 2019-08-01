import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = () => {};

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (video) => dispatch(handleSearchChange(video))
  }
}

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
