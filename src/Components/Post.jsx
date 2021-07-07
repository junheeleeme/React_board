import React from 'react';
import Topmenu from './Topmenu';

const Content = ({post})=> {    
    

    return(
        <>
            <Topmenu/>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-content">
                {post.body}
            </div>
        </>
    )
}

export default Content;