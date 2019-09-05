import React from 'react'

export default function Comments(props) {
    console.log(props);
    
    return (
        <div className="container comment">
           <p><span id="name">{props.name}</span>  (<span id="email">{props.email}</span>) </p> 
           <p id="commentBody">{props.body}</p> 
           
        </div>
    )
}
