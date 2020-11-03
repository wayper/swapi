import React, { useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
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
import { fetchLocalData } from '../../actions';

const PlanetPage = ({
  name,
  rotation_period,
  diameter,
  climate,
  gravity,
  terrain,
  population,
  residents,
}) => (
  <PlanetPageWrap>
    <Heading as="h2" color="yellow.700">{name}</Heading>
    <button onClick={() => fetchLocalData(url)}>TEST SAGA</button>

    <ItemDescription label="Период оборота:" value={rotation_period}/>
    <ItemDescription label="Диаметр:" value={diameter}/>
    <ItemDescription label="Климат:" value={climate}/>
    <ItemDescription label="Гравитация:" value={gravity}/>
    <ItemDescription label="Тип местности:" value={terrain}/>
    <ItemDescription label="Население:" value={population}/>
    {residents && residents.length
      ? (
          <Box>
            <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Известные жители:</Text>
            <List spacing={3} p={2}>
              {
                residents.map((resident) => (
                  <ItemResidents
                    key={resident}
                    resident={resident}
                  />
                ))
              }
            </List>
          </Box>
      )
      : <ItemDescription label="Известные жители:" value="Неизвестно!"/>
    }
  </PlanetPageWrap>
);

function PlanetPageWrap({ children }) {
  return (
    <Box
      flexGrow={1}
      p={5}
      shadow="md"
      borderWidth="1px"
      bg="yellow.50"
      w="100%"
      rounded="lg"
      color="white"
      mt={3}
    >
      {children}
    </Box>
  )
}

function ItemDescription({ label, value }) {
  return (
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>{label}</Text>
      <Text color="yellow.700" mt={4}>{value}</Text>
    </Box>
  )
}

function ItemResidents({ resident }) {
  return (
    <ListItem key={`resident-${resident}`}>
      <ListIcon icon="link" color="green.500" />
      <Link href={resident} isExternal>
        <Text  as="i" color="yellow.400">{resident}</Text>
      </Link>
    </ListItem>
  )
}

PlanetPageWrap.propTypes = {
  children: PropTypes.node,
}
PlanetPageWrap.defaultProps = {
  children: '',
}

ItemDescription.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
}
ItemDescription.defaultProps = {
  label: '',
  value: '',
}

ItemResidents.propTypes = {
  resident: PropTypes.string,
}
ItemResidents.defaultProps = {
  resident: '',
}

PlanetPage.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.arrayOf(PropTypes.string),
  fetchPlanetData: PropTypes.func,
};

PlanetPage.defaultProps = {
  name: '',
  rotation_period: '',
  diameter: '',
  climate: '',
  gravity: '',
  terrain: '',
  population: '',
  residents: [],
  fetchPlanetData: () => {},
};

export default PlanetPage;
