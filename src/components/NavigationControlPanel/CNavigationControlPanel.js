import { connect } from 'react-redux';
import VNavigationControlPanel from './VNavigationControlPanel';
import {
  fetchLocalData,
} from '../../actions';

const mapStateToProps = ({ navigation }) => {
  const { next, previous } = navigation;

  return ({
    next,
    previous,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: (url) => dispatch(fetchLocalData({ url })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VNavigationControlPanel);
