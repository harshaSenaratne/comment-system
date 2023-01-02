import React from 'react'
type CommentProps ={
id:string,
message:string
}
export const Comment:React.FunctionComponent<CommentProps> = ({id,message}) => {
  return (
    <div>{message}</div>
  )
}

export default Comment;