import React, { useState, useEffect } from 'react';
import Load from "./Load";
import List from "./List";
import Post from "./Post";
import Topmenu from "./Topmenu";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

const Main = () => {
    
    const [post, setPost] = useState([]);
    const [nowload, setNowload] = useState(true);
    // const params = useParams();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setPost(res.data);
            setNowload(false);
        }).catch((err) => {
            console.log(err);
            setNowload(true);
        })
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
                    <ul className="post-list">  
                    <Switch>
                        <Route path="/list" exact>
                            <Topmenu/>
                            <List post={post}/>
                        </Route>
                        <Route path="/post/:no" exact={false} render={(loc)=>{
                            const params = parseInt(loc.match.params.no);
                            console.log(params)
                            return <Post post={post[params-1]}/>
                        }}/>
                    </Switch>                        
                    </ul>
                </div>
            </article>
        </>
        )
    }
}

export default Main;