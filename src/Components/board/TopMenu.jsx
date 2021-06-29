const { useState } = require('react');
const React = require('react');
const ReactDom = require('react-dom');
const { Link, Route, Switch, useHistory } = require('react-router-dom');

const TopMenu = (({no, deletePost}) => {
    const [name, setName] = useState('홍길동');
    
    const onClick_Del = (e) =>{
        e.preventDefault();
        console.log(no);
        deletePost(no);
    }

    return(
        <ul className="topMenu">

            <Switch>
                <Route path={'/board'} exact={false}>
                    <li><Link to={'/board/write'}>글쓰기</Link></li> 
                </Route>
                <Route path={'/board/post'} exact={false}>
                    <li><Link to={'/board/write'}>글쓰기</Link></li> 
                </Route>
            </Switch>
            <Route path={'/board/post'} exact={false}>
                    <li><Link to={'/board/write'}>수정</Link></li> 
            </Route>
            <Route path={'/board/post'} exact={false}>
                    <li onClick={onClick_Del}><Link to={'/board'}>삭제</Link></li>
            </Route>
            <li>
                <Link to={'/board'}>목록</Link>
            </li>
        </ul>
    )
})

module.exports = TopMenu;