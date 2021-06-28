
const React = require('react');
const ReactDom = require('react-dom');
const { useState } = require('react');
const { Route, Switch, NavLink, useRouteMatch } = require('react-router-dom');

const Content = (({post}) => {
    console.log(post)

    return(
        <div className ='content'>
            
            <h3 className="cont-title">
                <span className="title-txt">{post.title}</span>
                <span className="title-wrt">{post.writter}</span>
                <span className="title-date">{post.date}</span>
            </h3>

            <div className="cont-content">
                {post.content}
            </div>            
        </div>
    )
})

module.exports = Content;