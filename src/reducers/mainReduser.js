import { combineReducers } from 'redux';
import fetching from './fetching';
import planetsData from './planetsData';
import activePlanet from './activePlanet';
import pagination from './pagination';
import message from './message';

const mainReduser = combineReducers({
  fetching,
  planetsData,
  activePlanet,
  pagination,
  message,
});

export default mainReduser;
