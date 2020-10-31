import {
  SET_FETCHING_STATUS,
  FETCH_LOCAL_DATA,
  SAVE_PLANETS_DATA,
  SET_NAVIGATION,
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

export const fetchLocalData = (payload) => ({
  type: FETCH_LOCAL_DATA,
  payload,
})

export const savePlanetsData = (payload) => ({
  type: SAVE_PLANETS_DATA,
  payload,
})

export const setNavigation = (payload) => ({
  type: SET_NAVIGATION,
  payload,
})
