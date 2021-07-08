import React, { useRef } from 'react';
import Topmenu from '../Topmenu';

const Content = ({post})=> {    
    const titleDom = useRef(Null);
    const bodyDom = useRef(Null);

    
    
// outerText로 본문내용 넣어줘야함
    return(
        <>
            <h2 ref={titleDom} className="post-title">{post.title}</h2>
            <div ref={bodyDom} className="post-content">
                {post.body} 
            </div>
        
        </>
    )
}

export default Content;