// src/features/auth/authSaga.ts
import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment, incrementByAmount, incrementByAmountAsync } from '../slice/auth-slice';

function* incrementAsync(action: ReturnType<typeof incrementByAmountAsync>) {
  yield delay(1000);
  yield put(incrementByAmount(action.payload));
}

function* watchIncrementAsync() {
  yield takeEvery(incrementByAmountAsync.type, incrementAsync);
}

export default function* authSaga() {
  yield takeEvery( increment.type, incrementAsync);
}
