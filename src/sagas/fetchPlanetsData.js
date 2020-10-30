import { takeLatest, put, call } from 'redux-saga/effects';
import getData from '../utils/getData';
import { FETCH_PLANETS_DATA } from '../actions/types';
import {
  savePlanetsData,
} from '../actions';

export function* fetchPlanetsData() {

  // Loading ...

  const url = 'https://swapi.dev/api/planets/';

  try {
    const result = yield call(getData, url);

    yield put(savePlanetsData(result));

    // Stop loading

  } catch (error) {
    // Error message
  }
}

export default function* () {
 yield takeLatest(FETCH_PLANETS_DATA, fetchPlanetsData);
}
