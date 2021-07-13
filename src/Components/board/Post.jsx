import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Load from '../Load';
import queryString from 'query-string';
import Topmenu from '../Topmenu';
import axios from 'axios';

const Content = ()=> {    
    const { search } = useLocation();
    const { no } = queryString.parse(search);
    const [nowload, setNowload] = useState(true);
    const [title, setTitle] = useState();
    const body = useRef(null);
    const [date, setDate] = useState();

    useEffect(()=>{

        axios.get('/post', {
            params : {
                no : no
            }
        }).then((res)=>{
            setNowload(false);
            setTitle(res.data.title);
            setDate(res.data.createdAt.substr(0, 10));
            body.current.innerText = res.data.body; 
        }).catch((err)=>{
            console.log(err);
        });

    },[])
    
    if(nowload){//로딩중
        return (<Load/>);
    }else{
        return(
            <>
                <div className="post-title-wrap">
                    <h2 className="post-title">{title}</h2>
                    <p className="post-date">{date}</p>
                </div>
                
                <div ref={body} className="post-content">
                </div>
            
            </>
        )
    }
    
}

export default Content;