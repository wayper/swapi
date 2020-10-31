import { combineReducers } from 'redux';
import fetching from './fetching';
import planetsData from './planetsData';
import navigation from './navigation';

const mainReduser = combineReducers({
  fetching,
  planetsData,
  navigation,
});

export default mainReduser;
