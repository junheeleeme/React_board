import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const btnStyle = makeStyles({
    button: {
        border : 'none',
        background : '#42a5f5',
        color : '#2196f3',
        height : 45,
        fontSize : 16,
        color : '#fff',
        "&:hover" : {
            background : "#1e88e5"
        }
    }
});

const Write = ({ listUpdate }) => {
    const his = useHistory();
    const { button } = btnStyle(); //makeStyles
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [nic, setNic] = useState("");
    const [passwd, setPasswd] = useState("");
    
    const [titleErr, setTitleErr] = useState(false);
    const [bodyErr, setBodyErr] = useState(false);
    const [nicErr, setNicErr] = useState({
        err : false,
        msg : ""
    });
    const [pwErr, setPwErr] = useState({
        err : false,
        msg : ""
    });


    const oncTitle = (e) =>{ setTitle(e.target.value); };
    const oncBody = (e) =>{ setBody(e.target.value); };
    const oncNic = (e) =>{ setNic(e.target.value.replace(/(\s*)/g, "")); };
    const oncPass = (e) =>{ setPasswd(e.target.value.replace(/(\s*)/g, "")); };


    const onSubmit = ((e)=>{
        e.preventDefault();

        if( title_valid() && body_valid() && nic_valid() && passwd_valid() ){

            console.log("Success!");
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
        if( title.replace(/(\s*)/g, "") !== '' ){
            setTitleErr(false);
            return true;
        }else{
            setTitleErr(true);
            return false;
        }
    }

    const body_valid = () => {
        if( body.replace(/(\s*)/g, "") !== ''){
            setBodyErr(false);
            return true;
        }else{
            setBodyErr(true);
            return false;
        }
    }

    const nic_valid = () => {
        if(nic.length > 1){
            setNicErr({
                err : false,
                msg : ""
            });
            return true;
        }else{
            setNicErr({
                err : true,
                msg : "2~6자리 닉네임을 입력해주세요."
            });
            return false;
        }
    }

    const passwd_valid = () => {
        if(passwd.length > 3 && passwd.length < 7){
            setPwErr({
                err : false,
                msg : ""
            });
            return true;
        }else{
            setPwErr({
                err : true,
                msg : "4~6자리 비밀번호를 입력해주세요."
            });
            return false;
        }
    }


    return(
        <>
            <form action="/" className="mount2">
        
                <div className="title-wrap">
                    <TextField onChange={oncTitle} id="outlined-full-width" className="title-input" label="제목" 
                        style={{ margin: 0 }} fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="outlined"
                        error={titleErr}
                    />
                </div>

                <div className="body-wrap">
                    <TextField onChange={oncBody} id="outlined-multiline-static" className="body-input" label="내용"
                    multiline fullWidth={true} InputLabelProps={{shrink: true,}} variant="outlined" 
                    error={bodyErr}
                    />
                </div>  

            <div className="user-wrap">
                <TextField
                    onChange={oncNic}
                    id="outlined-helperText"
                    label="닉네임"
                    className="nic-input"
                    defaultValue=""
                    variant="outlined"
                    InputLabelProps={{shrink: true,}}
                    placeholder="2~8자리"
                    helperText={nicErr.msg}
                    error={nicErr.err}
                />
                <TextField
                    onChange={oncPass}
                    id="outlined-password-input"
                    className="pw-input"
                    label="비밀번호"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    InputLabelProps={{shrink: true,}}
                    placeholder="4~6자리"
                    helperText={pwErr.msg}
                    error={pwErr.err}
                />

            </div>
                <Button onClick={onSubmit} className={button} id="writeBtn" variant="contained" fullWidth>글쓰기</Button>
            </form>
        </>
    )
}


export default Write;