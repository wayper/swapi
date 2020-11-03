import { takeLatest, put, call } from 'redux-saga/effects';
import getData from '../utils/getData';
import { FETCH_PLANET_DATA } from '../actions/types';
import {
  setFetchingLoading,
  setFetchingSuccess,
  setFetchingErrored,
  setActivePlanet,
  setMessage,
} from '../actions';

export function* fetchPlanetData({ payload }) {
  const ifNotHaveURL = !payload && !!payload.url;

  if (ifNotHaveURL) {
    throw Error('not have url for loading');
  }

  yield put(setFetchingLoading());

  try {
    const result = yield call(getData, payload.url);

    const isNotResults = !result || !result.data;

    if (isNotResults) {
      throw Error('Failed to get data')
    }

    yield put(setActivePlanet(result.data));

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
 yield takeLatest(FETCH_PLANET_DATA, fetchPlanetData);
}
