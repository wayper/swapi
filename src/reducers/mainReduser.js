import { combineReducers } from 'redux';
import planetsData from './planetsData';
import navigation from './navigation';

const mainReduser = combineReducers({
  planetsData,
  navigation,
});

export default mainReduser;
