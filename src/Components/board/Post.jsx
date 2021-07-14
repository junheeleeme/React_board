import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Load from '../Load';
import queryString from 'query-string';
import Topmenu from '../Topmenu';
import axios from 'axios';

const Post = ({post})=> {    
    const { search } = useLocation();
    const { no } = queryString.parse(search);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [date, setDate] = useState();
    const ele_body = useRef(null);


    useEffect(()=>{
        post.map((p)=>{

            if(p._id === no){
                setTitle(p.title);
                setBody(p.body);
                ele_body.current.innerText = p.body;
                setDate(p.createdAt.substr(0, 10));
            };

        })
    }, []); 
    

    return(
        <>
            <div className="post-title-wrap">
                <h2 className="post-title">{title}</h2>
                <p className="post-date">{date}</p>
            </div>
            
            <div ref={ele_body} className="post-content">
            </div>
        
        </>
    )

}

export default Post;