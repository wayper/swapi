import {
  SET_ACTIVE_PLANET,
} from '../actions/types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_PLANET:
      return {
        ...payload,
      }
    default:
      return state;
  }
}
