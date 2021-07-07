import React from 'react';
import { Route, useParams } from "react-router-dom";

const Content = ({post})=> {    
    const params = useParams();
    console.log(post);
    return(
        <>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-content">
                {post.body}
            </div>
        </>
    )
}

export default Content;