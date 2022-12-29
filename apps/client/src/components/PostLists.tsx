import { getPosts } from '../services/posts';
import { Link } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync';
import { ReactElement } from 'react';
export function PostList():ReactElement {
const {loading,error, value} = useAsync(getPosts);

 if(loading) return <h1>Loading</h1>
 if (error) return <h1 className="error-msg">{error}</h1>
  
 return (
   <>{
     value?.map(post => {
   return (
     <h1 key ={post.id}>
       <Link to={`/posts/${post.id}`}>
         {post.title}
       </Link>
     </h1>
   )   
  })
}
</>
)
}
