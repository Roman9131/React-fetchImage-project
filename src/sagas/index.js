import { call, put, fork, takeLatest, all } from 'redux-saga/effects';

import * as fetchImagesActions from '../actions/fetchImages';
import * as historyActions from '../actions/history';

import * as types from '../constants';
import * as api from '../api';

export function* fetchImages() {
  try {
    const data = yield call(api.fetchImages);

    const { id, title, image_url: url } = data.data;

    const date = new Date();
    const formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    yield put(historyActions.addItemToHistory({ id, url, title, date: formatedDate }));

    yield put(fetchImagesActions.fetchImagesSuccess(data));
  } catch (error) {
    yield put(fetchImagesActions.fetchImagesError(error));
  }
}

export function* watcher() {
  yield all([
    takeLatest(types.FETCH_IMAGE, fetchImages),
  ]);
}

export default  function* root() {
  yield fork(watcher);
}
