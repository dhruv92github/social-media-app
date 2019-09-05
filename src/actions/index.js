//  import history from '../container/history'
 import { push } from 'connected-react-router'
export const getPosts=()=>{
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>{
           dispatch({
               type:'GET_POSTS',
               posts
           }) 
        })
        .catch(err=>console.log(err))
    }
}
export const getPostsDetails=(id)=>{
    
    return dispatch=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(posts=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res=>res.json())
            .then(comments=>{
                dispatch({
                    type:'SHOW_POST_DETAILS',
                    posts,
                    comments
                }) 
                dispatch(push(`/posts/${id}`));
                console.log(`post url changed to /posts/${id}`)
            })
           
        })
        .catch(err=>console.log(err))
    }
}
export const loadMoreComments=()=>({
    type:'Load_More_Comments',
    noOfComments:10
})

export const getSearchedPost=(text)=>({
    type:'GET_SEARCHED_POSTS',
    text
})