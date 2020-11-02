import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box, Heading, Spinner } from "@chakra-ui/core";
import CardsList from '../CardsList';
import PlanetPage from '../PlanetPage';
import NotFoundPage from '../NotFoundPage';
import PaginationControlPanel from '../PaginationControlPanel';

const VMain = ({ fetching: { status }, fetchLocalData, data }) => {

  useEffect(() => {
    fetchLocalData();
  }, []);

  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100vh"
    >
      <Link to="/">
        <Box d="flex" justifyContent="center">
          <Heading as="h2" size="xl">Home</Heading>
        </Box>
      </Link>
      <Switch>
        <Route exact path="/">
          {(
            status == 'loading'
              ? <Spinner
                  size="xl"
                  speed="0.65s"
                  thickness="4px"
                  color="blue.500"
                  emptyColor="gray.200"
                />
              : <CardsList />
          )}
          <PaginationControlPanel />
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
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Box>
  )
};

VMain.propTypes = {
  fetching: PropTypes.objectOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  fetchLocalData: PropTypes.func,
};

VMain.defaultProps = {
  fetching: {},
  data: [],
  fetchLocalData: () => {},
};

export default VMain;
