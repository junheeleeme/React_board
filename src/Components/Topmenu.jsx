import React from "react";
import ReactDom from "react-dom";
import { Link, Route } from "react-router-dom";

const Topmenu = () => {
    return(
        <>
            <ul className="top-menu">
                <li><Link to="/list">목록</Link></li>
                <Route path="/post/:no">
                    <li><Link to="/delete">삭제</Link></li>
                </Route>
                <Route path="/post/:no">
                    <li><Link to="/edit">수정</Link></li>
                </Route>
                <li><Link to="/write">글쓰기</Link></li>
            </ul>
        </>
    )
}

export default Topmenu;