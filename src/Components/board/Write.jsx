import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom";
import ReactDom from 'react-dom'
import axios from 'axios';


const Write = ({listUpdate}) => {
    const his = useHistory();
    const titleInput = useRef(null);
    const bodyInput = useRef(null);
    const nicInput = useRef(null);
    const pwInput = useRef(null);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [nic, setNic] = useState();
    const [passwd, setPasswd] = useState();


    const changeInput = ((e) =>{
        if(e.target.id === "title-input"){
            setTitle(e.target.value);
        }else if(e.target.id === "body-input"){
            setBody(e.target.value);
        }else if(e.target.id === "pw-input"){
            setPasswd(e.target.value);
        }else{
            setNic(e.target.value);
        }
    });

    const onSubmit = ((e)=>{

        e.preventDefault();

        if( title_valid() && body_valid() && nic_valid() && passwd_valid() ){

            axios.post('/post/write/new', {
                    title : title,
                    body : body,
                    nic : nic,
                    passwd : passwd.toString()
            }).then((res)=>{

                if(res.status === 200){// 글 DB 저장완료

                    listUpdate();
                    axios.post('/post', { //작성한 글로 이동하기 위해 글 id조회
                        title : title,
                        body : body,
                        nic : nic,
                    }).then((res)=>{
                        
                        his.replace(`/post?no=${res.data}`);
                    }).catch(err=>{
                        console.log(err);
                    });
                };

            }).catch(err=>{
                console.log(err);
            });

        }
    });

    const title_valid = () => {
        if(titleInput.current.value !== ''){
            return true;
        }else{
            alert('제목을 입력해주세요.');
            return false;
        }
    }

    const body_valid = () => {
        if(bodyInput.current.value !== ''){
            return true;
        }else{
            alert('내용을 입력해주세요.');
            return false;
        }
    }

    const nic_valid = () => {
        if(nicInput.current.value.length !== 0){
            return true;
        }else{
            alert('닉네임을 입력해주세요.');
            return false;
        }
    }

    const passwd_valid = () => {
        if(pwInput.current.value.length > 3 && pwInput.current.value.length < 7){
            return true;
        }else{
            alert('비밀번호(4~6자리)를 입력해주세요.');
            return false;
        }
    }


    return(
        <>
            <form action="/" id="write-form">
                <input ref={titleInput} type="text" id="title-input" placeholder="글 제목" onChange={changeInput}/>
                <textarea ref={bodyInput} name="body-input" id="body-input" placeholder="내용" onChange={changeInput} />
            <div className="user-wrap">
                <span>닉네임 : </span>
                <input ref={nicInput} id="nic-input" type="text" maxLength="10" placeholder="닉네임" onChange={changeInput}/>
                <span>비밀번호 : </span>
                <input ref={pwInput} id="pw-input" type="password" maxLength="6" placeholder="4~6자리" onChange={changeInput}/>
            </div>
    
                <button type="submit" id="writeBtn" onClick={onSubmit}>글쓰기</button>
            </form>
        </>
    )
}

export default Write;