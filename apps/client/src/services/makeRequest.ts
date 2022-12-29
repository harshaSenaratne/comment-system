import axios from "axios";
import { IPost } from "../interfaces/Post.Interface";
const api = axios.create({
  baseURL:process.env.REACT_APP_SERVER_URL,
  withCredentials:true
})

export function makeRequest (url:any, options?:any){
return api(url,options)
.then(res=> res.data as IPost[])
.catch(error=> Promise.reject(error?.response?.data?.message?? "Error"))
}