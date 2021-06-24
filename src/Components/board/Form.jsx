const React = require('react');
const ReactDom = require('react-dom');

const Form = () => {
    

    return(
        
    <form action="/notyet" method="post" id="write_form">

        <input type="text" id="titleInput" placeholder="제목" />
        <textarea name="content" id="content" cols="30" rows="10" />
        <button type="submit" id="submitBtn">작성하기</button>
        
    </form>
    
    )
}

module.exports = Form;