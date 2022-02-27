import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {Posts} from '../../models';

export interface dashboardStaticstic {
    maxCount:number;
    minCount:number;
}
export interface rankingPost {
    postId:string;
    rankingList:Posts[];
}
export interface dashboardState { 
    loading:boolean;
    static:dashboardStaticstic;
    rankingPost:rankingPost[];
}
const initialState : dashboardState ={
    loading:false,
    static:{
        maxCount:0,
        minCount:0,
    },
    rankingPost:[]
}
const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        
        fetchData(state){ 
            state.loading=true
        },
        fetchDataSuccess(state){
            state.loading=false
         },
        fetchDataFailed(state){
            state.loading=false
         },
        
        setStateStic(state,action:PayloadAction<dashboardStaticstic>){
            state.static=action.payload
        },
        setRankingPost(state,action:PayloadAction<rankingPost[]>){
            state.rankingPost=action.payload
        }

        
    }
})
export const dashboardActions=dashboardSlice.actions;
export  const dashboarReducer = dashboardSlice.reducer;

export const dashboardLoading = (state:RootState)=>(state.dashboard.loading)