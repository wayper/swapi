import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/types';

export default (state = null, { type, payload }) => {
  const { text, messageType } = payload || {};

  switch (type) {
    case SET_MESSAGE:
      return {
        messageType,
        text,
      };
    case CLEAR_MESSAGE:
      return null;
    default:
      return state;
  }
}
