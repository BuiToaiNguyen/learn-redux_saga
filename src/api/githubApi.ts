import { axiosClientGitHub } from "./axiosApi";
import {ListParams, ListResponse, Todo } from "../models"

export const GitHubAPI ={
    getAll(params:any): Promise<ListResponse<any>>{
        const url ="/users"
        return axiosClientGitHub.get(url)
        
    },}