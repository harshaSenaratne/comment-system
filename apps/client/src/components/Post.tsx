import React from 'react'
import { ObjectType } from 'typescript';
import { usePost } from '../context/PostContext'
import {CommentList} from './CommentList';

export default function Post() {
  const {postData,rootComments} = usePost(); 
  const result:ObjectType = rootComments();
  return (
    <>
    <h1>{postData.title}</h1>
    <article>{postData.body}</article>
    <h3 className="comments-title">Comments</h3>
    <section>
      {rootComments !=null && rootComments.length > 0 && (
        <div className="mt-4">
          <CommentList comments={rootComments}/>
        </div>

      )}
      {/* {postData.comments} */}
    </section>
    </>
  )
}
