import {
  FETCH_PLANETS_DATA,
  SAVE_PLANETS_DATA,
} from './types';

export const fetchPlanetsData = (payload) => ({
  type: FETCH_PLANETS_DATA,
  payload,
})

export const savePlanetsData = (payload) => ({
  type: SAVE_PLANETS_DATA,
  payload,
})
