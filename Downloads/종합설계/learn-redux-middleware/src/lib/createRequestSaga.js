import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';


export default function createRequestSaga(type, request) {
  const SUCCESS = </span><span class="co49">${</span><span class="cd2 co34">type</span><span class="co33">}</span><span class="cd2 co31">_SUCCESS;
  const FAILURE = </span><span class="co49">${</span><span class="cd2 co34">type</span><span class="co33">}</span><span class="cd2 co31">_FAILURE;



return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}