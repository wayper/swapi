import {
  SAVE_PLANETS_DATA,
} from '../actions/types';

export default (state = null, { type, payload }) => {
  switch (type) {
    case SAVE_PLANETS_DATA:
      return {
        ...payload,
      }
    default:
      return state;
  }
}