import {
  SAVE_PLANETS_DATA,
} from '../actions/types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_PLANETS_DATA: {
      const regexp = /\D/g;

      return (
        payload.map((dataItem) => (
          {
            ...dataItem,
            id: dataItem.url.replace(regexp, ''),
          }
        ))
      )
    }
    default:
      return state;
  }
}
