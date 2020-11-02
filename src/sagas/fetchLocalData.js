import { takeLatest, put, call } from 'redux-saga/effects';
import getData from '../utils/getData';
import { FETCH_LOCAL_DATA } from '../actions/types';
import {
  setFetchingLoading,
  setFetchingSuccess,
  setFetchingErrored,
  savePlanetsData,
  setPagination,
  setMessage,
} from '../actions';

 const START_URL = 'https://swapi.dev/api/planets/';

export function* fetchLocalData(actions) {

  yield put(setFetchingLoading());

  const url = actions.payload && actions.payload.url;

  const currentUrl = url || START_URL;

  try {
    const result = yield call(getData, currentUrl);

    const isNotResults = !result || !result.data || !result.data.results;

    if (isNotResults) {
      const errorMessage = 'Failed to get data';
      yield put(setMessage({
        text: errorMessage,
        messageType: 'error',
      }));

      throw Error(errorMessage)
    }

    const { count, next, previous, results } = result.data;

    yield put(savePlanetsData(results));
    yield put(setPagination({
      count,
      next,
      previous,
    }))

    yield put(setFetchingSuccess());
  } catch (error) {
    yield put(setMessage({
      text: error.message,
      messageType: 'error',
    }));

    yield put(setFetchingErrored());
  }
}

export default function* () {
 yield takeLatest(FETCH_LOCAL_DATA, fetchLocalData);
}
