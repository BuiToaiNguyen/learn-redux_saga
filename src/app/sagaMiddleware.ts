import {delay, put, takeEvery, takeLatest,all,take,fork} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { forwardRef } from 'react';
import { authSaga } from '../features/auth/pages/authSaga';
import { LoginPayload, authAction } from '../features/auth/pages/authSlice';
import { increment, incrementSaga, incrementSagaSuccess } from '../features/counter/counterSlice';






export  function * rootSaga(){
    yield  fork(authSaga)
}