import { createAction, handleActions } from 'redux-actions';
<<<<<<< HEAD
import createRequestSaga, { createRequestActionTypes, } from '../lib/createRequestSaga';
=======
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
<<<<<<< HEAD
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WIRET_POST'); // 포스트 작성
=======
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성
<<<<<<< HEAD
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
=======
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST'); // 포스트 수정
>>>>>>> 02d20f216d37e6f99a8d85f14ac8400160901b89

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
<<<<<<< HEAD
    title,
    body,
    tags,
}));

// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
=======
  title,
  body,
  tags,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);

// saga 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
<<<<<<< HEAD
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
=======
  yield takeLatest(UPDATE_POST, updatePostSaga);
>>>>>>> 02d20f216d37e6f99a8d85f14ac8400160901b89
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
<<<<<<< HEAD
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
=======
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_POST]: state => ({
<<<<<<< HEAD
        ...state,
        // post, postError 초기화
        post: null,
        postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
        ...state,
        post,
    }),
    [WRITE_POST_FAILURE]: (state, {payload: postError }) => ({
        ...state,
        postError,
=======
      ...state,
      // post와 postError를 초기화
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post._id,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

<<<<<<< HEAD
export default write;
=======
export default write;
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
