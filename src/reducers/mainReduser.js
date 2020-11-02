import { combineReducers } from 'redux';
import fetching from './fetching';
import planetsData from './planetsData';
import pagination from './pagination';

const mainReduser = combineReducers({
  fetching,
  planetsData,
  pagination,
});

export default mainReduser;
