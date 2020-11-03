import { connect } from 'react-redux';

import CardsList from './CardsList';
import { setActivePlanet, fetchLocalData } from '../../actions';

const mapStateToProps = ({ planetsData }) => ({
  planetsData: planetsData || [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: () => dispatch(fetchLocalData()),
  setActivePlanet: ({ id }) => dispatch(setActivePlanet({ id })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsList);
