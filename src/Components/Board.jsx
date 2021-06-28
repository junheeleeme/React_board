const React = require('react');
const ReactDom = require('react-dom');
const { useState, useEffect } = React;
const Form = require("./board/Form");
const List = require("./board/List");
const Content = require("./board/Content");
const TopMenu = require("./board/TopMenu");
const { Route, Switch, withRouter, Redirect, Link } = require('react-router-dom');

const Board = (({location}) => {

    const [title, setTitle] =useState('title');
    const [post, setPost] = useState([
        {
            no : '1',
            title : '첫 번째 포스트입니다.',
            content : '1',
            writter : '맥쭈니',
            date : '2021-06-25'
        },
        {
            no : '2',
            title : '두 번째 포스트입니다.',
            content : '2',
            writter : '홍길동',
            date : '2021-06-26'
        }
    ]);

    const submit_Post = (postData) => {
        
        setPost([...post,
            {
                no : '3',
                title : postData.title,
                content : postData.content,
                writter : postData.writter,
                date : setDate()
            }
        ]);
    }

    const setDate = () =>{

        const time = new Date() //날짜 시간 구하기
        const year = time.getFullYear();
        const month = (time.getMonth()+1).toString.length === 1 ? ('0' + (time.getMonth()+1)) : (time.getMonth()+1);
        const date =  time.getDate();
        const getDate = year+'-'+month+'-'+date;
        
        return getDate;
    }
    

    return(
        
        <div className="board">
            <Route path={'/board'} exact={false} component={TopMenu} />
            <Switch>
                <Route path={'/board'} exact={true} render={()=> <List post={post}/>} />
                <Route path={'/board/write'} exact={true} render={()=> <Form submit_Post={submit_Post}/>} />
                <Route path={'/board/post/:id'} exact={true} component={Content} />
            </Switch>
        </div>
        
    )
})

module.exports = Board;