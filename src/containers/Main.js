import VMain from '../components/Main/VMain';
import { connect } from 'react-redux';
import {
  fetchLocalData,
} from '../actions';

const mapStateToProps = ({ fetching, planetsData, message }) => {
  const data = planetsData || [];

  return ({
    data,
    message,
    fetching,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: () => dispatch(fetchLocalData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMain);
