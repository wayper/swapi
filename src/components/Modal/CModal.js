import { connect } from 'react-redux';
import VModal from './VModal';
import {
  clearMessage,
} from '../../actions';

const mapStateToProps = ({ message }) => {
  const { text, messageType } = message;

  return ({
    text,
    messageType,
  });
};

const mapDispatchToProps = (dispatch) => ({
  clearMessage: () => dispatch(clearMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VModal);
