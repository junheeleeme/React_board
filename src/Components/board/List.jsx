const React = require('react');
const ReactDom = require('react-dom');
const { useState, memo } = require('react');
const { Route } = require('react-router-dom');
const ListItem = require("./ListItem");
const Content = require("./Content");

const List = (({post}) => {

    
    return(
            <div className="list">
                <ul className="post_list">
                {
                    post.map( (post, idx) => (
                        <ListItem key={post.title+idx} post={post}/>
                    ))
                }
                </ul>
            </div>
    )
})

module.exports = List;