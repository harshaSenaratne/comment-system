import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import { getPost } from '../services/posts';
import { useAsync} from '../hooks/useAsync'
import {IPost} from '../interfaces/IPost';
import { ObjectType } from 'typescript';
type PostContextType ={
 id:string,
 title:string,
}

const PostContext = React.createContext<any>({});
 
export function usePost(){
  return useContext(PostContext)
}

export function PostProvider({children}:{children:any}){
  const {id} = useParams<string>();
  const{loading,error,value:post} = useAsync(()=> getPost(id),[id!])
  // post as IPost[];
  // const commentsByParentId = useMemo(() => {
  //   if(post?.length && post[0].comments=== null) return []
  //   const group:any = {}
  //   if(post?.length && post[0]){
  //     post[0].comments.forEach(comment => {
  //     group[comment?.parentId] ||= []
  //     group[comment?.parentId].push(comment)
  //   })
  //   }
  //   return group
  // }, [post?.length && post[0].comments]) 

  const sortCommentsByParentId =():ObjectType=>{
    //  if(post?.length && post[0].comments=== null) return {}
    const group:any = {}

    if(post){
      // console.log('post.....',post[0].comments);

      // post?.map((data)=>{
      //   console.log("data.... ",data);
      //   data.comments.map((comment)=>{
      //     group[comment.parentId] ||= []
      //     group[comment.parentId].push(comment);
      //   })
      // })
    }
    // console.log("group/////",group);
    return group
  }

 function getReplies(parentId:string){
   const result:ObjectType = sortCommentsByParentId();
  return result[parentId as keyof typeof  sortCommentsByParentId]
 }

  return <PostContext.Provider value={{
    postData:{id,...post},
    rootComments:sortCommentsByParentId,
    getReplies,

  }}>
    {loading? (<h1>Loading</h1>)
  :error? (<h1 className="error-msg">{error}</h1>)  
:(children)  
}
    </PostContext.Provider>


}