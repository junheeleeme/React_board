import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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


const Edit = ({listUpdate, post}) => {
    const his = useHistory();
    const { button } = btnStyle(); //makeStyles
    const { search } = useLocation();
    const { no } = queryString.parse(search);
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [titleErr, setTitleErr] = useState(false);
    const [bodyErr, setBodyErr] = useState(false);
    
    const titleInput = useRef(null);
    const bodyInput = useRef(null);

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

    const oncTitle = (e) =>{ setTitle(e.target.value) };
    const oncBody = (e) =>{ setBody(e.target.value) };


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
            <form action="/" id="edit-form">
                
                <div className="edit-title-wrap">
                    <TextField inputRef={titleInput} onChange={oncTitle} id="outlined-full-width" className="title-input" label="제목" 
                        style={{ margin: 0 }} fullWidth margin="normal" InputLabelProps={{shrink: true,}} variant="outlined"
                        error={titleErr}
                    />
                </div>

                <div className="edit-body-wrap">
                    <TextField inputRef={bodyInput} onChange={oncBody} id="outlined-multiline-static" className="body-input" label="내용"
                    multiline fullWidth={true} InputLabelProps={{shrink: true,}} variant="outlined" 
                    error={bodyErr}
                    />
                </div>  
                
                <Button onClick={onSubmit} className={button} id="editBtn" variant="contained" fullWidth>수정하기</Button>
            </form>
        </>
    )
}

export default Edit;