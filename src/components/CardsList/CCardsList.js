import { connect } from 'react-redux';
import VCardsList from './VCardsList';

const mapStateToProps = ({ planetsData }) => {
  const data = planetsData || [];
  
  return {
    data,
  }
};

export default connect(mapStateToProps)(VCardsList);
