import React from 'react'
import { IComments } from '../interfaces/IComments';
import {Comment} from './Comment'
type CommentListProps = {
 comments:IComments[]
}

export const CommentList:React.FunctionComponent<CommentListProps> = ({comments}) => {
  return <>
  {
  comments.map(comment=>(
    <div key={comment.id} className="comment-stack">
      <Comment id={comment.id} message={comment.message}/>
    </div>
  ))
}
  </>
}
export default CommentList;