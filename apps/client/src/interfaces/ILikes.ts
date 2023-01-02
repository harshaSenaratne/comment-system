import { IComments } from "./IComments"
import { IUser } from "./IUser"

export interface ILikes{
  id:string,
  user:IUser,
  comment:IComments,
  commentId:string,
  userId:string
}