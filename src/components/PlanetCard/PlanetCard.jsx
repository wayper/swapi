import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/core";

const VPlanetCard = ({
  url,
  name,
  climate,
  population,
  // setActivePlanet,
}) => {
  // const onSetActivePlanet = () => setActivePlanet({ id });

  return (
    <Link to={`/planet?url=${url}`}>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        bg="blue.50"
        w="100%"
        rounded="lg"
        color="white"
        mt={3}
        // onClick={onSetActivePlanet}
      >
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
}

VPlanetCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  climate: PropTypes.string,
  population: PropTypes.string,
  setActivePlanet: PropTypes.func,
};

VPlanetCard.defaultProps = {
  id: '',
  name: '',
  climate: '',
  population: '',
  setActivePlanet: () => {},
};

export default VPlanetCard;
