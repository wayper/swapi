import VMain from '../components/Main/VMain';
import { connect } from 'react-redux';
import {
  fetchPlanetsData,
} from '../actions';

const mapStateToProps = ({ planetsData }) => {
  const data = planetsData && planetsData.data && planetsData.data.results || [];

  return ({
    data
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetsData: () => dispatch(fetchPlanetsData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMain);
