const React = require('react');
const ReactDom = require('react-dom');
const { useState } = require('react');
const { Link } = require('react-router-dom');

const Form = ({createPost}) => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeCont = (e) => {
        setContent(e.target.value.replace(/(?:\r\n|\r|\n)/g,'<br/>'));

    }

    const submit = (e) =>{
        e.preventDefault();
        setContent(content);
        const post = {
            title : title,
            content : content,
            writer : '홍길동'
        }
        createPost(post);
        
    }


    return(
    <form action="/" id="write_form">

        <input type="text" id="titleInput" placeholder="제목" onChange={changeTitle}/>
        <textarea name="content" id="content" cols="30" rows="10" onChange={changeCont}/>
        
            <button type="submit" id="submitBtn" onClick={submit}>
                <Link to={'/board'}>작성하기</Link>
            </button>
        
    </form>
    
    )
}

module.exports = Form;