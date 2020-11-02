import {
  SET_PAGINATION,
} from '../actions/types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_PAGINATION:
      return {
        ...payload,
      }
    default:
      return state;
  }
}
