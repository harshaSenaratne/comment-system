export interface IComments{
  id:string,
  message:string,
  createdAt:Date,
  updatedAt:Date,
  user:any,
  userId:string,
  post:any,
  postId:string,
  parentId:string,
  likes:any,
  children:any[]
}
