import React from 'react';
import PropTypes from 'prop-types';

const VPlanetPage = ({
  name,
  rotation_period,
  diameter,
  climate,
  gravity,
  terrain,
  population,
  residents,
}) => (
  <div onClick={() => console.log('click card')}>
    <div>Имя: {name}</div>
    <div>Период оборота: {rotation_period}</div>
    <div>Диаметр: {diameter}</div>
    <div>Климат: {climate}</div>
    <div>Гравитация: {gravity}</div>
    <div>Тип местности: {terrain}</div>
    <div>Население: {population}</div>
    <div>Известные жители:
      <ul>
        {residents.map((resident) => (
          <li key={`resident-${resident}`}>{resident}</li>
        ))}
      </ul>
    </div>
  </div>
);

VPlanetPage.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.arrayOf(PropTypes.string),
};

VPlanetPage.defaultProps = {
  name: '',
  rotation_period: '',
  diameter: '',
  climate: '',
  gravity: '',
  terrain: '',
  population: '',
  residents: [],
};

export default VPlanetPage;
