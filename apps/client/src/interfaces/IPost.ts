import { IComments } from "./IComments";

export interface IPost{
  id:string,
  title:string,
  body:string,
  comments:IComments[]
}