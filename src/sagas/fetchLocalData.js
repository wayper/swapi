import { takeLatest, put, call } from 'redux-saga/effects';
import getData from '../utils/getData';
import { FETCH_LOCAL_DATA } from '../actions/types';
import {
  savePlanetsData,
  setNavigation,
} from '../actions';

const START_URL = 'https://swapi.dev/api/planets/';

export function* fetchLocalData(actions) {

  // Loading ...

  const url = actions.payload && actions.payload.url;

  const currentUrl = url || START_URL;

  try {
    const result = yield call(getData, currentUrl);

    if (result) {
      const { count, next, previous, results } = result.data;

      yield put(savePlanetsData(results));
      yield put(setNavigation({
        count,
        next,
        previous,
      }))

      // Stop loading
    }


  } catch (error) {

    console.log();

    // Stop loading

    // Error message
  }
}

export default function* () {
 yield takeLatest(FETCH_LOCAL_DATA, fetchLocalData);
}
