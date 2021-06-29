const React = require("react");
const ReactDom = require("react-dom");
const Home = require("./Home");
const Board = require("./Board");
const Login = require("./Login");
const Join = require("./join");
const NotFound = require("./NotFound");
const { useState, memo, useEffect, useRouteMatch } = React;
const { Route, Switch, Redirect, withRouter} = require('react-router-dom');

const Main =  withRouter(({location}) => {
    const [title, setTitle] = useState('Home');

    const routes = [
        {
            path : "/",
            exact : true,
            compo : Home 
        },
        {
            path : "/home",
            exact : true,
            compo : Home 
        },
        {
            path : "/login",
            exact : true,
            compo : Login
        },
        {
            path : "/join",
            exact : true,
            compo : Join
        },
        {
            path : "/board",
            exact : false,
            compo : Board
        },
        {
            path : "o/",
            exact : false,
            compo : NotFound
        },
    ];


    return(
        <div className="main">
            <div className="main_wrap">
                <Switch>
                    {
                        routes.map((route, idx) =>(
                            <Route
                                key={route.component+idx}
                                path={route.path}
                                exact={route.exact}
                                render={(loc)=><route.compo {...loc} />}
                            />
                        ))
                    }
                </Switch>
            </div>
        </div>
    )
})

module.exports = Main;