import React from "react";
import ReactDom from "react-dom";
import { Link, Route, Switch, useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import queryString from 'query-string';

const Topmenu = ({listUpdate}) => {

    const { search } = useLocation();
    const { no } = queryString.parse(search);
    const his = useHistory();

    const deletePost = (e) => {
        e.preventDefault();

        axios.delete(`/post/delete?no=${no}`).then((res)=>{
            if(res.status === 200){
                listUpdate();
                his.push('/list');
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    const goList = (e) =>{
        e.preventDefault();
        listUpdate();
        his.push('/list');
    }

    return(
        <>
            <ul className="top-menu">

                <Switch>
                    <Route path="/list">
                        <li><Link to="/post/write">글쓰기</Link></li>
                    </Route>  
                    <Route path="/post/write" exact={true}>
                        <li><a href="/" onClick={goList}>목록</a></li>
                    </Route> 
                    <Route path="/post" exact={false}>
                        <li><a href="/" onClick={goList}>목록</a></li>
                        <li><a href="/" onClick={deletePost}>삭제</a></li>
                        <li><a href="/">수정</a></li>
                        <li><Link to="/post/write">글쓰기</Link></li>
                    </Route>            
                </Switch>
            </ul>
        </>
    )
}

export default Topmenu;