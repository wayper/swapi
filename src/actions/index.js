import {
  FETCH_LOCAL_DATA,
  SAVE_PLANETS_DATA,
  SET_NAVIGATION,
} from './types';

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
