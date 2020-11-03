import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.node,
  message: PropTypes.objectOf(PropTypes.string),
  isLoading: PropTypes.bool,
  isHome: PropTypes.bool,
  fetchLocalData: PropTypes.func,
};

export const defaultProps = {
  children: '',
  message: {},
  isLoading: false,
  isHome: false,
  fetchLocalData: () => {},
};
