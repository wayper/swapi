import { connect } from 'react-redux';

import PlanetCard from './PlanetCard';
import { setActivePlanet } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  setActivePlanet: ({ id }) => dispatch(setActivePlanet({ id })),
});

export default connect(
  null,
  mapDispatchToProps,
)(PlanetCard);
