import axios from "axios";
import { IPost } from "../interfaces/IPost";
const api = axios.create({
  baseURL:process.env.REACT_APP_SERVER_URL,
  withCredentials:true
})

export async function makeRequest (url:any, options?:any){
return api(url,options)
.then(res=> res.data as IPost)
.catch(error=> Promise.reject(error?.response?.data?.message?? "Error"))
}