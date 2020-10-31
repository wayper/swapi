import VMain from '../components/Main/VMain';
import { connect } from 'react-redux';
import {
  fetchLocalData,
} from '../actions';

const mapStateToProps = ({ planetsData }) => {
  const data = planetsData || [];

  return ({
    data
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: () => dispatch(fetchLocalData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMain);
