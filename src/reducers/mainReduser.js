import { combineReducers } from 'redux';
import planetsData from './planetsData';

const mainReduser = combineReducers({
  planetsData,
});

export default mainReduser;
