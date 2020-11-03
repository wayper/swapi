import { connect } from 'react-redux';

import { fetchPlanetData } from '../../actions';
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

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetData: (url) => dispatch(fetchPlanetData(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlanetPage);