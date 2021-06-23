const React = require("react");
const ReactDom = require("react-dom");

const { useState, useRef } = React;
const { Route, Switch } = require('react-router-dom');
const Header = require("./Components/Header");
const Home = require("./Components/menu/Home");
const About = require("./Components/menu/About");
const Skill = require("./Components/menu/Skill");
const Portfolio = require("./Components/menu/Portfolio");
const Contact = require("./Components/menu/Contact");
const Footer = require("./Components/Footer");
const Join = require("./Components/join/Join");
const NotFound = require("./Components/NotFound");


const App = () => {
const [title, setTitle] = useState('메인');

const routes = [
    {
        path : "/",
        exact : true,
        component : Home //컴포넌트 이름
    },
    {
        path : "/home",
        exact : true,
        component : Home //컴포넌트 이름
    },
    {
        path : "/about",
        exact : true,
        component : About //컴포넌트 이름
    },
    {
        path : "/skill",
        exact : true,
        component : Skill //컴포넌트 이름
    },
    {
        path : "/portfolio",
        exact : true,
        component : Portfolio //컴포넌트 이름
    },
    {
        path : "/contact",
        exact : true,
        component : Contact
    },
    {
        path : "/",
        exact : false,
        component : NotFound
    },
];


    return(
        <div className="wrap">
            <Header/>
        
                <Switch>
                    {
                        routes.map((route, idx) =>(
                            <Route
                                key={route.component+idx}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                                
                            />
                        ))
                    }
                </Switch>

            <Footer/>
        </div>
    )
}

module.exports = App;