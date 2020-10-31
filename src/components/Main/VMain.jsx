import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box, Heading } from "@chakra-ui/core";
import CardsList from '../CardsList';
import PlanetPage from '../PlanetPage';
import NavigationControlPanel from '../NavigationControlPanel';

const VMain = ({ fetchLocalData, data }) => {

  useEffect(() => {
    fetchLocalData();
  }, []);

  return (
    <Box>
      <Link to="/">
        <Box d="flex" justifyContent="center">
          <Heading as="h2" size="xl">Home</Heading>
        </Box>
      </Link>
      <Switch>
        <Route exact path="/">
          <CardsList />
          <NavigationControlPanel />
        </Route>
        {(
          data.map((dataItem, i) => (
            <Route
              key={`page-${i}`}
              path={`/planet-page/${dataItem.id}`}
            >
              <PlanetPage {...dataItem} />
            </Route>
          ))
        )}
      </Switch>
    </Box>
  )
};

VMain.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  fetchLocalData: PropTypes.func,
};

VMain.defaultProps = {
  data: [],
  fetchLocalData: () => {},
};

export default VMain;
