const React = require('react');
const ReactDom = require('react-dom');
const { useState } = require('react');
const { Link, useHistory } = require('react-router-dom');

const Form = ({submit_Post}) => {
    const his = useHistory();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeCont = (e) => {
        setContent(e.target.value);
    }

    const submit = (e) =>{
        e.preventDefault();
        const post = {
            title : title,
            content : content,
            writter : '홍길동'
        }
        submit_Post(post);
        his.goBack(1);
    }

    return(
    <form action="/" id="write_form">

        <input type="text" id="titleInput" placeholder="제목" onChange={changeTitle}/>
        <textarea name="content" id="content" cols="30" rows="10" onChange={changeCont}/>
        <button type="submit" id="submitBtn" onClick={submit} onSubmit={submit}>작성하기</button>

    </form>
    
    )
}

module.exports = Form;