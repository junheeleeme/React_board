const React = require("react");
const ReactDom = require("react-dom");
const { useState, useRef } = React;
const Header = require("./components/Header");
const Main = require("./components/Main");
const Footer = require("./components/Footer");
const { useEffect } = require("react");

const App = () => {

const [title, setTitle] = useState('메인');
const [menu, setMenu] = useState(['login', 'join' , 'board']);

    return(
        
        <div className="wrap">
            <Header menu={menu}/>
            <Main menu={menu}/> 
            <Footer/>
        </div>
    )
}

module.exports = App;