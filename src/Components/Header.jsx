const React = require("react");
const ReactDom = require("react-dom");
const { useState, useRef, memo, useEffect } = React;
const { Route, NavLink } = require('react-router-dom');

const Header = memo( () => {
    const [title, setTitle] = useState('Title');
    const [menu, setMenu] = useState(['home', 'about', 'skill', 'portfolio', 'contact']);


    return(
            <header className="header">
                <div className="header_wrap">

                    <h1 className="title"><NavLink exact to="/">{title}</NavLink></h1>
                
                    <nav className="nav">
                        <ul className="menu">

                        {menu.map((v, i)=>{
                            return (
                                <li key={v+i}><NavLink to={'/'+v}>{v.toUpperCase()}</NavLink></li>
                            );
                        })}

                        </ul>
                    </nav>

                </div>
            </header>
    )
})


module.exports = Header;