import {
  SET_FETCHING_STATUS,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  FETCH_LOCAL_DATA,
  SAVE_PLANETS_DATA,
  SET_PAGINATION,
} from './types';

export const setFetchingLoading = () => ({
  type: SET_FETCHING_STATUS,
  payload: 'loading',
});
export const setFetchingSuccess = () => ({
  type: SET_FETCHING_STATUS,
  payload: 'success',
});
export const setFetchingErrored = () => ({
  type: SET_FETCHING_STATUS,
  payload: 'errored',
});

export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const fetchLocalData = (payload) => ({
  type: FETCH_LOCAL_DATA,
  payload,
})

export const savePlanetsData = (payload) => ({
  type: SAVE_PLANETS_DATA,
  payload,
})

export const setPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
})
