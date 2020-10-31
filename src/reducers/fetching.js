import { SET_FETCHING_STATUS } from '../actions/types';

export default (state = { status: 'loading' }, { type, payload }) => {
  switch (type) {
    case SET_FETCHING_STATUS:
      return {
        ...state,
        status: payload,
      }
    default:
      return state;
  }
}
