import React, { useState, useEffect, useMemo } from 'react';
import Load from "./Load";
import List from "./board/List";
import Post from "./board/Post";
import Write from "./board/Write";
import Edit from "./board/Edit";
import Topmenu from "./Topmenu";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";


const Main = (() => {
    
    const [post, setPost] = useState([]);
    const [nowload, setNowload] = useState(true);
    
    useEffect(()=>{

        axios.get('/post/list')
            .then((res) => {
                console.log(res.data);
                setPost(res.data);
                setNowload(false);
            }).catch((err) => {
                console.log(err);
                setNowload(true);
            });

    }, []);

    const listUpdate = () =>{
        setNowload(true);
        console.log("Second Rendering");
        axios.get('/post/list')
            .then((res) => {
                //console.log(res)
                setPost(res.data);
                setNowload(false);
            }).catch((err) => {
                console.log(err);
                setNowload(true);
            });
    }

    
    if(nowload){ //로딩중
        return(
            <>
                <article className="main">
                    <div className="main-wrap">
                        <ul className="post-list">  
                            <Load/>
                        </ul>
                    </div>
                </article>
            </>
        )
    }else{      //로딩완료
        return(
            <>
            <article className="main">
                <div className="main-wrap">
                    <Route path="/" exact>
                        <Link to="/list">게시글 목록</Link>
                    </Route>
                    <Switch>
                        <Route path="/list" exact={false}>
                            <Topmenu/>
                        </Route>
                        <Route path="/post" exact={false}>
                            <Topmenu listUpdate={listUpdate}/>
                        </Route>
                    </Switch>
                    
                    <Switch>
                        <Route path="/list" exact>
                            <ul className="post-list">  
                                <List post={post}/>
                            </ul>
                        </Route>
                        <Route path="/post/write" exact={true}> 
                            <Write listUpdate={listUpdate}/>
                        </Route>
                        <Route path="/post/update" exact={false}>
                            <Edit listUpdate={listUpdate} post={post}/> 
                        </Route>
                        <Route path="/post" exact={false}>
                            <Post post={post}/>
                        </Route>
                    </Switch>                        
                    
                </div>
            </article>
        </>
        )
    }
})

export default Main;