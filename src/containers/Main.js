import React from 'react';
import VMain from '../components/Main/VMain';
import { connect } from 'react-redux';
import {
  fetchPlanetsData,
} from '../actions';

const Main = (props) => (<VMain { ...props }/>);

const mapStateToProps = ({ planetsData }) => ({ planetsData });

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetsData: () => dispatch(fetchPlanetsData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
