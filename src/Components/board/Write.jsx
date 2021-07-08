import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom";
import ReactDom from 'react-dom'
import axios from 'axios';

const Write = () => {
    const his = useHistory();
    const titleInput = useRef(null);
    const bodyInput = useRef(null);
    const test = useRef(null);

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const changeInput = ((e) =>{
        if( e.target.id === "title-input"){
            setTitle(e.target.value);
            console.log(title);
        }else{
            setBody(e.target.value);
            console.log(body);
        }
    })

    const onSubmit = ((e)=>{
        e.preventDefault();
        const title = titleInput.current.value;
        const body = bodyInput.current.value;

        axios({
            method : 'post',
            url : '/post/write/new',
            data : {
                title : title,
                body : body
            }
        }).then((res)=>{
            if(res.status === 200){
                console.log("전송 성공");
            }
        }).catch(err=>{
            console.log(err);
        });
        
    })

    return(
        <>
            <form action="/" id="write-form">
                <input ref={titleInput} type="text" id="title-input" placeholder="글 제목" onChange={changeInput}/>
                <textarea ref={bodyInput} name="body-input" id="body-input" placeholder="내용" onChange={changeInput} />
                <button type="submit" id="writeBtn" onClick={onSubmit}>글쓰기</button>
            </form>
        </>
    )
}

export default Write;