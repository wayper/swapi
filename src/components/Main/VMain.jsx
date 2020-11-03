import React, { useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/core";
import { propTypes, defaultProps } from './props';
import Loader from '../Loader';
import Modal from '../Modal';
import CardsList from '../CardsList';
import PlanetPage from '../PlanetPage';
import NotFoundPage from '../NotFoundPage';
import PaginationControlPanel from '../PaginationControlPanel';
import { useLocation } from "react-router-dom";

const START_URL = 'https://swapi.dev/api/planets/';

const VMain = ({
  isLoading,
  message,
  fetchLocalData,
  fetchPlanetData,
}) => (
  <MainWrap>
    {( message && <Modal /> )}
    <Switch>
      <Route exact path="/">
        <HomePage
        isLoading={isLoading}
        fetchLocalData={fetchLocalData}
      />
      </Route>
      <Route path="/planet">
        <CurrentPlanetPage
          isLoading={isLoading}
          fetchPlanetData={fetchPlanetData}
        />
      </Route>
      <Route path="*">
        <NoMathPage />
      </Route>
    </Switch>
  </MainWrap>
);

function MainWrap({ children }) {
  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100vh"
    >
      {children}
    </Box>
  )
}

function HomePage({ isLoading, fetchLocalData }) {
  const query = useQuery();
  const url = query.get("url") || START_URL;

  useEffect(() => {
    fetchLocalData({ url });
  }, [url]);

  return (
    <>
      <Navigation isHome />
      {(
        isLoading
          ? <Loader />
          : <CardsList url={url}/>
      )}
      <PaginationControlPanel />
    </>
  )
}

function CurrentPlanetPage({ isLoading, fetchPlanetData }) {
  let query = useQuery();
  const url = query.get("url");
  console.log(url);

  useEffect(() => {
    fetchPlanetData({ url });
  }, []);

  return (
    <>
      <Navigation />
      {(
      isLoading
        ? <Loader />
        : <PlanetPage />
      )}
    </>
  )
}

function NoMathPage() {
  return (
    <>
      <Navigation />
      <NotFoundPage />
    </>
  )
}

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

VMain.propTypes = propTypes;
VMain.defaultProps = defaultProps;

MainWrap.propTypes = propTypes;
MainWrap.defaultProps = defaultProps;

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

CurrentPlanetPage.propTypes = propTypes;
CurrentPlanetPage.defaultProps = defaultProps;

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default VMain;
