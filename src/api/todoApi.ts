import { axiosClient } from "./axiosApi";
import {ListParams, ListResponse, Todo } from "../models"

const todoApi ={
    getAll(params:ListParams): Promise<ListResponse<Todo>>{
        const url ="/todos"
        return axiosClient.get(url,{ params

        })
        
    },
    getById(id:string): Promise<ListResponse<Todo>>{
        const url =`/todos/${id}`
        return axiosClient.get(url)
        
    },
    delete(id:string): Promise<any>{
        const url =`/todos/${id}`
        return axiosClient.delete(url)
        
    },
    add(todo:Todo): Promise<Todo>{
        const url ="/todos"
        return axiosClient.post(url,todo)
        
    },
    update(todo:Todo): Promise<Todo>{
        const url ="/todos"
        return axiosClient.patch(url,todo)
        
    }
}
export default todoApi;