import  {createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../models';

export interface AuthState {
    islogged: boolean;
    logging: boolean;
    currentUser?:User
};
export interface LoginPayload {
    userName:string;
    password:string;
};
const initialState :AuthState = {
    islogged:false,
    logging:false,
    currentUser:undefined,
}
const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers:{
         login(state,action: PayloadAction<LoginPayload>){
             state.logging=true
         },
         loginSuccess(state,action: PayloadAction<User>){
             state.currentUser=action.payload;
             state.logging=false;
             state.islogged=true
         },
         loginFailed(state,action: PayloadAction<string>){

            state.islogged=false;
         },
         logout(state){
             state.islogged=false;
             state.currentUser=undefined
         }
     },


})
export const authAction = authSlice.actions;
//selector 
export const selectIsLogging = (state :any)=> state.auth.isLogging
export const authReducer = authSlice.reducer;