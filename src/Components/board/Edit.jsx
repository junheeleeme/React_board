import React, { useState, useRef, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import axios from 'axios';

const Edit = ({listUpdate, post}) => {
    const his = useHistory();
    const { search } = useLocation();
    const { no } = queryString.parse(search);
    
    const titleInput = useRef(null);
    const bodyInput = useRef(null);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    useEffect(()=>{
        post.map((p)=>{
            if(p._id === no){
                titleInput.current.value = p.title;
                bodyInput.current.value = p.body;
                setTitle(p.title);
                setBody(p.body);
            };
        })
    }, []);

    const changeInput = ((e) =>{
        if( e.target.id === "title-input"){
            setTitle(e.target.value);
        }else{
            setBody(e.target.value);
        }
    })

    const onSubmit = ((e)=>{

        e.preventDefault();
        
        if( title_valid() && body_valid() ){
            
            axios.post(`/post/update?no=${no}`, {
                    title : title,
                    body : body
            }).then((res)=>{
                if(res.status === 200){
                    listUpdate();
                    his.replace(`/post?no=${no}`);
                }
            }).catch(err=>{
                console.log(err);
            });
        }
        
    });

    const title_valid = () => {
        if(title !== ''){
            return true;
        }else{
            alert('제목을 입력해주세요.');
            return false;
        }
    }

    const body_valid = () => {
        if(body !== ''){
            return true;
        }else{
            alert('내용을 입력해주세요.');
            return false;
        }
    }

    return(
        <>
            <form action="/" id="write-form">
                <input ref={titleInput} type="text" id="title-input" placeholder="글 제목" onChange={changeInput}/>
                <textarea ref={bodyInput} name="body-input" id="body-input" placeholder="내용" onChange={changeInput} />
                <button type="submit" id="writeBtn" onClick={onSubmit}>수정하기</button>
            </form>
        </>
    )
}

export default Edit;