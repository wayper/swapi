import { connect } from 'react-redux';
import VCardsList from './VCardsList';

const mapStateToProps = ({ planetsData }) => {
  const data = planetsData && planetsData.data && planetsData.data.results || [];
  
  return {
    data,
  }
};

export default connect(mapStateToProps)(VCardsList);
