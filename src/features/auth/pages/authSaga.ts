import {delay, put, takeEvery, takeLatest,all,take,fork,call} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { useHistory} from 'react-router-dom';
import { forwardRef, useState } from 'react';
import { authAction, LoginPayload } from './authSlice';
import todoApi from '../../../api/todoApi';
// import { useDispatch } from '../../../app/hooks';
import { todoActions } from '../../todo/todoSlice';



// const history = useHistory()

 function* handleLogin(payload : LoginPayload ){
    localStorage.setItem("access_token","login");
    yield put(authAction.loginSuccess({id:1,name:"toainguyen"}))
    // yield put(push('/admin'))
    // history.push("/admin")
}
 function *handleLogOut( ){
    localStorage.removeItem("access_token");
    console.log("logout")
}

 function *watchLogin(){

    while(true){
        const islogged = Boolean(localStorage.getItem("access_token"))
        if(!islogged){
            const action : PayloadAction<LoginPayload> = yield take(authAction.login.type)
            yield fork(handleLogin ,action.payload)

        }
        yield take(authAction.logout.type)
        yield call(handleLogOut)
    }
}
export function* authSaga(){
    yield  fork(watchLogin)

}