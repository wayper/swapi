import { connect } from 'react-redux';

import PlanetPage from './PlanetPage';

const mapStateToProps = ({ activePlanet }) => {
  const {
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residents,
  } = activePlanet;

  return ({
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residents,
  });
}

export default connect(
  mapStateToProps,
)(PlanetPage);