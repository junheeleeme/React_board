const { useState } = require('react');
const React = require('react');
const ReactDom = require('react-dom');


const Join = () => {
    const [title, setTitle] = useState('회원가입');



    return(
    <>
        <div className="join">
            <div className="join_wrap">
                <h2>{title}</h2>

            </div>
        </div>
    </>
    )
}

module.exports = Join;