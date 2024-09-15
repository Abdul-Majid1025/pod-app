import { all, fork } from 'redux-saga/effects';
import authSaga from '../saga/auth-saga';

export function* rootSaga(): any {
    yield all([fork(authSaga)]);
}

export default rootSaga;