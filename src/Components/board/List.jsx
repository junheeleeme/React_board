const React = require('react');
const ReactDom = require('react-dom');
const { useState, memo } = require('react');
const { Route, Switch, NavLink} = require('react-router-dom');

const List = memo( ({}) => {

    const [post, setPost] = useState([
        {
            title : '첫 번째 포스트입니다.',
            writter : '맥쭈니',
            date : '2021-06-25'
        },
        {
            title : '두 번째 포스트입니다.',
            writter : '홍길동',
            date : '2021-06-26'
        }
    ]);

    console.log(post);

    return(
        <div className="list">
            <ul className="post_list">
                {
                    post.map( (post, idx) =>  
                    <li>
                        <NavLink to="/">
                            <span className="post_title">{post.title}</span>
                            <span className="post_writter">{post.writter}</span>
                            <span className="post_date">{post.date}</span>
                        </NavLink>
                    </li>
                    )
                }
            </ul>
        </div>
    )
})

module.exports = List;