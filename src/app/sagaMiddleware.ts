import {delay, put, takeEvery, takeLatest,all} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authSaga } from '../features/auth/pages/authSaga';
import { increment, incrementSaga, incrementSagaSuccess } from '../features/counter/counterSlice';




export function *handleIncrement(action : PayloadAction<number> ){
    yield delay(2000)

    yield put(incrementSagaSuccess(action.payload))


}


export  function * rootSaga(){
    yield  all([authSaga()]);
}