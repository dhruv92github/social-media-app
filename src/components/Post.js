import React from "react";

export default function Post({ onClick, ...post }) {
  return (
    <div className="post" onClick={() => onClick(post.id)}>
      <p><strong>Title :</strong>  {post.title} </p>
      <p><strong>Content :</strong> {post.body} </p>
      <hr />
      <p className="commentTag">
        <i className="far fa-comment-alt"></i> &nbsp;
        comments 
      </p>
    </div>
  );
}
