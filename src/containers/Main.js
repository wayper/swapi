import VMain from '../components/Main/VMain';
import { connect } from 'react-redux';
import {
  fetchLocalData,
  fetchPlanetData,
} from '../actions';

const mapStateToProps = ({ fetching: { status }, message }) => {
  const isLoading = status == 'loading';

  return ({
    isLoading,
    message,
  });
};
const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: ({ url }) => dispatch(fetchLocalData({ url })),
  fetchPlanetData: ({ url }) => dispatch(fetchPlanetData({ url })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMain);
