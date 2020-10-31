import {
  SET_NAVIGATION,
} from '../actions/types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_NAVIGATION:
      return {
        ...payload,
      }
    default:
      return state;
  }
}
