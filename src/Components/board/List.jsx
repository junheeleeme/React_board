import React from "react";
import ReactDom from "react-dom";
import { Route, Switch, Link } from "react-router-dom";

const List = ({post}) => {
        
    return(
        <> 
            {
                post.map((post, idx) =>
                    <li key={post._id + idx}>
                        <Link to={'/post'+ '?no='+post._id} >
                            <span className="list-title">
                                {post.title}
                            </span>
                            <span className="list-nic">
                                {post.nicName}
                            </span>
                            <span className="list-date">
                                {post.createdAt.substr(0, 10)}
                            </span>
                        </Link>
                    </li>
                )
            }
        </>
    )
}

export default List;