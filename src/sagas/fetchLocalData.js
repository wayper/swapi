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

export function* fetchLocalData({ payload }) {
  const ifNotHaveURL = !payload || !payload.url;

  if (ifNotHaveURL) {
    throw Error('not have url for loading');
  }

  yield put(setFetchingLoading());

  try {
    const result = yield call(getData, payload.url);

    const isNotResults = !result || !result.data || !result.data.results;

    if (isNotResults) {
      throw Error('Failed to get data')
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
