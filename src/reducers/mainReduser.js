import { combineReducers } from 'redux';
import fetching from './fetching';
import planetsData from './planetsData';
import pagination from './pagination';
import message from './message';

const mainReduser = combineReducers({
  fetching,
  planetsData,
  pagination,
  message,
});

export default mainReduser;
