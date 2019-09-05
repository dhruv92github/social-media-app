import React, { Component } from 'react'
import { Suspense, lazy } from 'react';
import Loading from './Loading';
const Post = lazy(() => import('./Post'));

export default class PostList extends Component {
    handlePostClick=(id)=>{
        console.log("post clicked");
        console.log(id);
        setTimeout(() => {
            this.props.getPostsDetails(id); 
        }, 1000);
        
    }
    render() {
        const posts=this.props.posts;
       
        return (
            <div className="container">
                {
                   posts.map(post=>{
                       return(
                        <Suspense fallback={<Loading/>} key={post.id}>
                           <Post {...post} onClick={this.handlePostClick}  />
                        </Suspense>
                       )
                   }) 
                }
            </div>
        )
    }
}
