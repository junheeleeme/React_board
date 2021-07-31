import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


const Post = ({post})=> {    
    const { search } = useLocation();
    const { no } = queryString.parse(search);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [date, setDate] = useState();
    const [nic, setNic] = useState();
    const ele_body = useRef(null);


    useEffect(()=>{
        post.map((p)=>{

            if(p._id === no){
                setTitle(p.title);
                setBody(p.body);
                setNic(p.nicName);
                ele_body.current.innerText = p.body;
                setDate(p.createdAt.substr(0, 10));
            };
        })
    }, []); 
    

    return(
        <>
            <div className={`post-wrap mount`}>
                <div className="post-title-wrap">
                    <h2 className="post-title">{title}</h2>
                    <span className="post-date">{date}</span>
                    <span className="post-nic">{nic}</span>
                </div>
                
                <div ref={ele_body} className="post-content"></div>
            </div>
        
        </>
    )

}

export default Post;