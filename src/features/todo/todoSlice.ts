import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import todoApi from "../../api/todoApi";
import {Todo}  from "../../models/";

export interface TodoInterface {
    item:{

        id:string;
        name:string
    },
    todo: Todo[],
    filter:{
        radioFilter:number,
        key:string
    }

}


const initialState :TodoInterface ={
    item:{

        id:"",
        name:'',
    },
    todo:[],
    filter:{
        radioFilter:1,
        key:''
    }};

export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        setKey(state,action:any){
            state.filter.key=action.payload
        },
        setTodoJS(state,action:any){
            state.todo=action.payload
        },
        addTodo(state,action:PayloadAction<Todo>){
            state.todo = [...state.todo,action.payload]
        },
        delete(state,action:PayloadAction<any>){
            const todo = [...state.todo];
           const a =todo.filter((todo)=> todo.id!=action.payload)
            state.todo=a

        },
        changeStatus(state,action:PayloadAction<any>){
        const todo=[...state.todo]
        todo.map((todo)=>{if(todo.id === action.payload){
            todo.completed=!todo.completed
            return todo
        }})
        console.log(todo)
        state.todo=todo
        },

        changeRadio(state,action:PayloadAction<number>){
            state.filter.radioFilter=action.payload
        },


        deleteTodo(state,action: PayloadAction<string>){

        },
    }
    
})
export const todoReducer=todoSlice.reducer;

export const todoActions= todoSlice.actions;
export const numberRadio=(state:any)=>(state.todo.filter.radioFilter)
export const selectTodoList=(state:any)=>(state.todo.todo)
export const selectKey=(state:any)=>(state.todo.filter.key)

export const  todoListByFilter= createSelector(numberRadio,selectTodoList,selectKey ,(number,listAll,key)=>{
    if(number==1){
        return listAll.filter((todo:any)=>todo.title.includes(key));
    }
    else if(number==2){
       return listAll.filter((todo:any)=>todo.completed==true&&todo.title.includes(key))
    }
    else if(number==3){
        return listAll.filter((todo:any)=>todo.completed==false &&todo.title.includes(key))
    }
})