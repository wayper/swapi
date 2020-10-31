import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

import './SPlanetCard.css';

const VPlanetCard = ({
  id,
  name,
  climate,
  population,
}) => (
  <Link to={`/planet-page/${id}`} onClick={() => console.log(id)}>
    <div className="planet-card">
      <div className="card-label">
        {`Название: `}
        <span>{name}</span>
      </div>
      <div className="card-label">
        {`Климат: `}
        <span>{climate}</span>
      </div>
      <div className="card-label">
        {`Население: `}
        <span>{population}</span>
      </div>
    </div>
  </Link>
);

VPlanetCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  climate: PropTypes.string,
  population: PropTypes.string,
};

VPlanetCard.defaultProps = {
  id: '',
  name: '',
  climate: '',
  population: '',
};

export default VPlanetCard;
