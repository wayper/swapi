import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardsList from '../CardsList';
import PlanetPage from '../PlanetPage';

const regexp = /\D/g;

const VMain = ({ fetchPlanetsData, data }) => {

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  return (
    <div id="app-main">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <CardsList />
        </Route>
        {(
          data.map((dataItem, i) => (
            <Route key={`page-${i}`} path={`/planet-page/${dataItem.url.replace(regexp, "")}`}>
              <PlanetPage {...dataItem} />
            </Route>
          ))
        )}
      </Switch>
    </div>
  )
};

VMain.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  fetchPlanetsData: PropTypes.func,
};

VMain.defaultProps = {
  data: [],
  fetchPlanetsData: () => {},
};

export default VMain;
