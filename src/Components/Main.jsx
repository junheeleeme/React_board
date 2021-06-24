const React = require("react");
const ReactDom = require("react-dom");
const Home = require("./Home");
const Board = require("./Board");
const Join = require("./join/Join");
const NotFound = require("./NotFound");
const { useState, memo, useEffect } = React;
const { Route, Switch, Redirect } = require('react-router-dom');

const Main = memo( ({menu}) => {
    const [title, setTitle] = useState('Home');

    const routes = [
        {
            path : "/",
            exact : true,
            compo : Home //컴포넌트 이름
        },
        {
            path : "/home",
            exact : true,
            compo : Home //컴포넌트 이름
        },
        {
            path : "/board",
            exact : false,
            compo : Board
        },
        {
            path : "/",
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
                                render={(props)=><route.compo {...props}/>}
                            />
                        ))
                    }
                </Switch>
            </div>
        </div>
    )
})

module.exports = Main;