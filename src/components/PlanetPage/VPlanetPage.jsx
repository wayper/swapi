import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/core";

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
  <Box p={5} shadow="md" borderWidth="1px" bg="yellow.50" w="100%" rounded="lg" color="white" mt={3}>
    <Heading as="h3" color="yellow.700">{name}</Heading>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Период оборота:</Text>
      <Text color="yellow.700" mt={4}>{rotation_period}</Text>
    </Box>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Диаметр:</Text>
      <Text color="yellow.700" mt={4}>{diameter}</Text>
    </Box>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Климат:</Text>
      <Text color="yellow.700" mt={4}>{climate}</Text>
    </Box>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Гравитация:</Text>
      <Text color="yellow.700" mt={4}>{gravity}</Text>
    </Box>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Тип местности:</Text>
      <Text color="yellow.700" mt={4}>{terrain}</Text>
    </Box>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Население:</Text>
      <Text color="yellow.700" mt={4}>{population}</Text>
    </Box>
    {residents && residents.length
      ? (
          <Box>
            <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Известные жители:</Text>
            <List spacing={3} p={2}>
              {
                residents.map((resident) => (
                  <ListItem key={`resident-${resident}`}>
                    <ListIcon icon="link" color="green.500" />
                    <Link href={resident} isExternal>
                      <Text  as="i" color="yellow.400">{resident}</Text>
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          </Box>
      )
      : (
        <Box d="flex">
          <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Известные жители:</Text>
          <Text color="yellow.700" mt={4}>Неизвесно!</Text>
        </Box>
      )
    }
  </Box>
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
