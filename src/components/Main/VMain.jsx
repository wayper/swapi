import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const VMain = ({ fetchPlanetsData }) => {

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  return (
    <div id="app-main">
      HO! HO! HO!
    </div>
  )
};

VMain.propTypes = {
  fetchPlanetsData: PropTypes.func,
};

VMain.defaultProps = {
  fetchPlanetsData: () => {},
};

export default VMain;
