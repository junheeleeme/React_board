import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Topmenu from '../Topmenu';
import axios from 'axios';

const Content = ()=> {    
    const { search } = useLocation();
    const { no } = queryString.parse(search);
    const body = useRef(null);
    const [title, setTitle] = useState();

    useEffect(()=>{

        axios.get('/post', {
            params : {
                no : no
            }
        }).then((res)=>{
            setTitle(res.data.title);
            body.current.innerText = res.data.body; 
        }).catch((err)=>{
            console.log(err);
        });

    },[])
    

    return(
        <>
            <h2 className="post-title">{title}</h2>
            <div ref={body} className="post-content">
            </div>
        
        </>
    )
}

export default Content;