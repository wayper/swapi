import { connect } from 'react-redux';
import VPaginationControlPanel from './VPaginationControlPanel';
import {
  fetchLocalData,
} from '../../actions';

const mapStateToProps = ({ pagination }) => {
  const { next, previous } = pagination;

  return ({
    next,
    previous,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: (url) => dispatch(fetchLocalData({ url })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VPaginationControlPanel);
