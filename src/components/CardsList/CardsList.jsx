import React from 'react';
import PropTypes from 'prop-types';
import { Box } from "@chakra-ui/core";
import PlanetCard from '../PlanetCard';

const CardsList = ({ planetsData }) => {
  const list = planetsData.map(({
    url,
    name,
    climate,
    population,
  }, i) => (
    <PlanetCard
      key={`card-${i}`}
      url={url}
      name={name}
      climate={climate}
      population={population}
    />
  ))

  return (
    <Box flexGrow={1} overflow="auto">
      {list}
    </Box>
  );
}

CardsList.propTypes = {
  planetsData: PropTypes.arrayOf(PropTypes.object),
  fetchLocalData: PropTypes.func,
};

CardsList.defaultProps = {
  planetsData: [],
  fetchLocalData: () => {},
};

export default CardsList;
