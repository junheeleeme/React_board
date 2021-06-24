const React = require('react');
const ReactDom = require('react-dom');
const { useState, useEffect } = React;
const Form = require("./board/Form");
const List = require("./board/List");
const { Route, Switch, NavLink, useRouteMatch } = require('react-router-dom');

const Board = ({location}) => {
    const { path, url } = useRouteMatch();   
    
    const routes = [
        {
            path : `${path}`,
            exact : true,
            compo : List
        },
        {
            path : `${path}/write`,
            exact : true,
            compo : Form
        },
    ];
    
    return(
        
        <div className="board">
            <ul className="topMenu">
                <li>
                    <NavLink to={`${url}/write`}>글쓰기</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}`}>수정</NavLink>
                </li>                
                <li>
                    <NavLink to={`${url}`}>목록</NavLink>
                </li>
            </ul>

            <Switch>
                    {
                        routes.map((route, idx) =>(
                            <Route
                                key={route.component+idx}
                                path={route.path}
                                exact={route.exact}
                                render={(props)=><route.compo {...props}/>}
                            />
                            
                        ))
                    }
            </Switch>
            
        </div>
        
    )
}

module.exports = Board;