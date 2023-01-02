import {useState,useCallback, useEffect} from 'react';
import { IPost } from "../interfaces/IPost";
export function useAsync (func:()=> void, dependencies:string[]= []){
 const {execute,...state} = useAsyncInternal(func,dependencies,true)
 useEffect(()=>{
  execute()
  },[execute])

  return state;

}
export function useAsyncFn(func:()=> void, dependencies:string[]){
return useAsyncInternal(func,dependencies,false)
}

function useAsyncInternal (func:any,dependencies:string[],initalLoading:boolean=false){
const [loading,setLoading] = useState(initalLoading)
const [error,setError] = useState()
const [value,setValue] = useState<IPost[]>()

const execute = useCallback((...params:any)=>{
  setLoading(true);
  return func(...params).then((data:IPost[])=>{
    setValue(data)
    setError(undefined)
    return data
  }).catch((err:any)=>{
    setValue(undefined)
    setError(err);
    return Promise.reject(error);
  }).finally(()=>{
     setLoading(false);
  }) 

},dependencies)

return {loading,error,value,execute}

}