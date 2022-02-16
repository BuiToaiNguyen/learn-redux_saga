import {delay, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementSaga, incrementSagaSuccess } from '../features/counter/counterSlice';




export function *handleIncrement(action : PayloadAction<number> ){
    yield delay(2000)

    yield put(incrementSagaSuccess(action.payload))


}


export  function * rootSaga(){
    console.log("heloo")
    yield takeEvery(incrementSaga.toString(),handleIncrement)
}