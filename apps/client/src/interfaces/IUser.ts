import { IComments } from "./IComments";
import { ILikes } from "./ILikes";

export interface IUser{
  id :   string, 
  name:   string,
  comments:IComments[]
  likes:ILikes[]
}