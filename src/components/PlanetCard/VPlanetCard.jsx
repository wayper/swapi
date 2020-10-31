import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/core";

const VPlanetCard = ({
  id,
  name,
  climate,
  population,
}) => (
  <Link to={`/planet-page/${id}`}>
    <Box p={5} shadow="md" borderWidth="1px" bg="blue.50" w="100%" rounded="lg" color="white" mt={3}>
      <Heading as="h4" color="blue.700" size="md">{name}</Heading>
      <Box d="flex">
        <Text fontWeight="bold" color="blue.700" mt={4} mr={2}>Климат:</Text>
        <Text color="blue.700" mt={4}>{climate}</Text>
      </Box>
      <Box d="flex">
        <Text fontWeight="bold" color="blue.700" mt={4} mr={2}>Население:</Text>
        <Text color="blue.700" mt={4}>{population}</Text>
      </Box>
    </Box>
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
