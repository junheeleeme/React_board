import React, { useState, useEffect } from 'react';
import Load from "./Load";
import List from "./board/List";
import Post from "./board/Post";
import Write from "./board/Write";
import Topmenu from "./Topmenu";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

const Main = () => {
    
    const [post, setPost] = useState([]);
    const [nowload, setNowload] = useState(true);

    useEffect(()=>{
        axios.get('/post/list')
            .then((res) => {
                //console.log(res.data)
                setPost(res.data);
                setNowload(false);
            }).catch((err) => {
                console.log(err);
                setNowload(true);
            });
    }, [])
    

    if(nowload){
        return(
            <>
                <article className="main">
                    <div className="main_wrap">
                        <ul className="post-list">  
                            <Load/>
                        </ul>
                    </div>
                </article>
            </>
        )
    }else{
        return(
            <>
            <article className="main">
                <div className="main_wrap">
                    <Route path="/" exact>
                        <Link to="/list">게시글 목록</Link>
                    </Route>
                    <Switch>
                        <Route path="/list" exact={false}>
                            <Topmenu/>
                        </Route>
                        <Route path="/post" exact={false}>
                            <Topmenu/>
                        </Route>
                    </Switch>
                    
                    <Switch>
                        <Route path="/list" exact>
                            <ul className="post-list">  
                                <List post={post}/>
                            </ul>
                        </Route>
                        <Route path="/post/write" exact={true}> 
                            <Write/>
                        </Route>
                        <Route path="/post" exact={false}>
                            <Post/>
                        </Route>
                    </Switch>                        
                    
                </div>
            </article>
        </>
        )
    }
}

export default Main;