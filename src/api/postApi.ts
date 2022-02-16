import { axiosClient } from "./axiosApi";
import {ListResponse,Posts } from "../models"

const postApi ={
    getAll(): Promise<ListResponse<Posts>>{
        const url ="/posts"
        return axiosClient.get(url,{params : {
            _page:1,
            _limit:10,
        }})
        
    }
}
export default postApi;