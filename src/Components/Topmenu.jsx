import React from "react";
import ReactDom from "react-dom";
import { Link, Route, Switch } from "react-router-dom";

const Topmenu = () => {
    return(
        <>
            <ul className="top-menu">
                <li><Link to="/list">목록</Link></li>
                <Switch>
                    <Route path="/list">
                        <li><Link to="/post/write">글쓰기</Link></li>
                    </Route>  
                    <Route path="/post/write" exact={true}>
                    </Route> 
                    <Route path="/post/:no">
                        <li><Link to="/delete">삭제</Link></li>
                        <li><Link to="/edit">수정</Link></li>
                        <li><Link to="/post/write">글쓰기</Link></li>
                    </Route>            
                </Switch>
            </ul>
        </>
    )
}

export default Topmenu;