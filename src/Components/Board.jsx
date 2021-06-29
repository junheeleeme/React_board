const React = require('react');
const ReactDom = require('react-dom');
const { useState, useEffect } = React;
const Form = require("./board/Form");
const List = require("./board/List");
const Content = require("./board/Content");
const TopMenu = require("./board/TopMenu");
const { Route, Switch, Redirect, Link, useRouteMatch } = require('react-router-dom');

const Board = (({location}) => {
        
    const [title, setTitle] =useState('title');
    const [post, setPost] = useState([
        {
            no : '1',
            title : '첫 번째 포스트입니다.',
            content : '1',
            date : '2021-06-25'
        },
        {
            no : '2',
            title : '두 번째 포스트입니다.',
            content : '2',
            date : '2021-06-26'
        }
    ]);

    const createPost = (postData) => {
        
        setPost([...post,
            {
                no : post.length+1,
                title : postData.title,
                content : postData.content,
                writer : postData.writer,
                date : setDate()
            }
        ]);
    }

    const deletePost = (idx) => {
        const temp = [...post];
        temp.splice((idx-1), 1);

        setPost([...temp]);
    }


    useEffect( ()=>{ //처음 실행시 로컬스토리지 체크
        const local_data = localStorage.getItem('post') !== null ? JSON.parse(localStorage.getItem('post')) : [];
        setPost(local_data);
    }, []) //<- ComponentDidMount

    useEffect( () =>{ //sideEffect todos 데이터 감시
        localStorage.setItem("post", JSON.stringify(post));
    }, [post]) 


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
            <Route path={'/board'} exact={true} component={TopMenu} />
            <Switch>
                <Route path={'/board/post/:id'} exact={false} render={(loc)=> {
                    const no = loc.match.params.id
                    return <TopMenu no={no} deletePost={deletePost}/>
                }} />
            </Switch>
            <Switch>
                <Route path={'/board'} exact={true} render={()=> <List post={post}/>} />
                <Route path={'/board/write'} exact={true} render={()=> <Form createPost={createPost}/>} />
                <Route path={'/board/post/:id'} exact={false} 
                    render={(loc)=> {
                        const post_no = loc.match.params.id-1; //params에 따른 게시글 념겨주기
                        return <Content post={post[post_no]}/>
                    }
                } />
            </Switch>
        </div>
        
    )
})

module.exports = Board;