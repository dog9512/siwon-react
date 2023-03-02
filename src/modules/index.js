import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
<<<<<<< HEAD
=======
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
<<<<<<< HEAD
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga()]);
=======
  post,
  posts,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
>>>>>>> 57f614e03d7162c21e011550030e6bdc6a864b49
}

export default rootReducer;
