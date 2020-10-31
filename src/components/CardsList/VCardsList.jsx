import React from 'react';
import PropTypes from 'prop-types';
import { Box } from "@chakra-ui/core";
import PlanetCard from '../PlanetCard';

const regexp = /\D/g;

const VCardsList = ({ data }) => {
  const list = data.map(({
    url,
    name,
    climate,
    population,
  }, i) => (
    <PlanetCard
      key={`card-${i}`}
      id={url.replace(regexp, "")}
      name={name}
      climate={climate}
      population={population}
    />
  ))
  return (
    <Box h="85vh" overflow="auto">
      {list}
    </Box>
  );
}

VCardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

VCardsList.defaultProps = {
  data: [],
};

export default VCardsList;
