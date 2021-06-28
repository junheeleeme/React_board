const React = require('react');
const ReactDom = require('react-dom');
const { useState, memo } = require('react');
const { Link, useRouteMatch } = require('react-router-dom');


const ListItem = (({post}) => {
    
    const match = useRouteMatch();

    return(
        <li>
            <Link to={match.path+'/post/'+post.no}>
                <span className="post_title">{post.title}</span>
                <span className="post_writter">{post.writter}</span>
                <span className="post_date">{post.date}</span>
            </Link>
        </li>
    )
})

module.exports = ListItem;