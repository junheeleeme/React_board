const React = require('react');
const ReactDom = require('react-dom');
const { Link, useRouteMatch, Route, Switch } = require('react-router-dom');

const TopMenu = (() => {
    
    const match = useRouteMatch();
    
    return(
        <ul className="topMenu">
            <Switch>
                <Route path={match.path} exact={true}>
                    <li><Link to={match.path + '/write'}>글쓰기</Link></li> 
                </Route>
                <Route path={match.path+'/post'} exact={false}>
                    <li><Link to={match.path + '/write'}>글쓰기</Link></li> 
                </Route>
            </Switch>
            
            <Route path={match.path + '/post/:id'} exact={false}>
                <li>
                    <Link to={match.path + '/edit'}>수정</Link>
                </li> 
            </Route>
            <li>
                <Link to={'/board'}>목록</Link>
            </li>
        </ul>
    )
})

module.exports = TopMenu;