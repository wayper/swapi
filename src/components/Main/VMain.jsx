import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/core";
import Loader from '../Loader';
import Modal from '../Modal';
import CardsList from '../CardsList';
import PlanetPage from '../PlanetPage';
import NotFoundPage from '../NotFoundPage';
import PaginationControlPanel from '../PaginationControlPanel';

const VMain = ({
  fetching: { status },
  fetchLocalData,
  data,
  message,
}) => {

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
      {(
        message && <Modal />
      )}
      <Switch>
        <Route exact path="/">
        <Navigation isHome />
          {(
            status == 'loading'
              ? <Loader />
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
              <Navigation />
              <PlanetPage { ...dataItem } />
            </Route>
          ))
        )}
        <Route path="*">
          <Navigation />
          <NotFoundPage />
        </Route>
      </Switch>
    </Box>
  )
};

VMain.propTypes = {
  message: PropTypes.objectOf(PropTypes.string),
  fetching: PropTypes.objectOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  fetchLocalData: PropTypes.func,
};

VMain.defaultProps = {
  message: {},
  fetching: {},
  data: [],
  fetchLocalData: () => {},
};

function Navigation({ isHome }) {
  return (
    <Link to="/">
      <Box d="flex" justifyContent="center" alignItems="center">
        <Box>
          <Heading as="h2" size="xl">{isHome ? '' : 'Back to '}Home</Heading>
        </Box>
      </Box>
    </Link>
  )
}

Navigation.propTypes = {
  isHome: PropTypes.bool,
};

Navigation.defaultProps = {
  isHome: false,
};

export default VMain;
