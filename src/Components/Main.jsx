import React, { useState, useEffect } from 'react';
import Load from "./Load";
import List from "./board/List";
import Post from "./board/Post";
import Write from "./board/Write";
import Edit from "./board/Edit";
import UserCheck from "./board/UserCheck";
import Intro from "./Intro";
import Topmenu from "./Topmenu";
import boardImg from "../images/board.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";


const Main = (() => {

    const [post, setPost] = useState([]);
    const [nowload, setNowload] = useState(true);
    const [total, setTotal] = useState(true);

    useEffect(()=>{

        axios.get('/post/list')
            .then((res) => {          //post[0] : 포스트
                setPost(res.data[0]);   //post[1] : 전체 포스팅 개수
                setTotal(res.data[1]);
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
            .then((res) => {            //post[0] : 포스트
                setPost(res.data[0]);   //post[1] : 전체 포스팅 개수
                setTotal(res.data[1]);
                setNowload(false);
            }).catch((err) => {
                console.log(err);
                setNowload(true);
            });
    }

    
    if(nowload){ //로딩중
        return(
            <>
                <Load/>
            </>
        )
    }else{      //로딩완료
        return(
            <>
            <article className="main">
                

                    <Route path="/" exact={true} component={Intro}/>

                    <Route path="/" exact>
                        <Link to="/list" className="goBoardBtn">
                        <img className="boardImg" src={boardImg} alt="boardImg" />
                        <p className="goBoardTxt">게시판으로 이동</p>
                        </Link>
                    </Route>

                    {/* Switch-Route -> Topmenu */}
                    <Switch> 
                        <Route path="/list" exact={false}>
                            <Topmenu/>
                        </Route>
                        <Route path="/post" exact={false}>
                            <Topmenu listUpdate={listUpdate}/>
                        </Route>
                    </Switch>
                    
                    {/* Switch-Route -> List / Write / Post / Edit */}

                    <Switch>
                        <Route path="/list" exact>
                            <ul className="post-list">  
                                <List post={post}/>
                            </ul>
                        </Route>
                        <Route path="/post/write" exact={true}> 
                            <Write listUpdate={listUpdate}/>
                        </Route>
                        <Route path="/post/update/usercheck" exact={false}>
                            <UserCheck action={'update'}/> 
                        </Route>
                        <Route path="/post/delete/usercheck" exact={false}>
                            <UserCheck action={'delete'} listUpdate={listUpdate} /> 
                        </Route>
                        <Route path="/post/update" exact={false}>
                            <Edit listUpdate={listUpdate} post={post}/> 
                        </Route>
                        <Route path="/post" exact={false}>
                            <Post post={post}/>
                        </Route>
                    </Switch>                        
                    

            </article>
        </>
        )
    }
})

export default Main;