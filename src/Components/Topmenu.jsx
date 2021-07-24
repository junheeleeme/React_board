import React from "react";
import ReactDom from "react-dom";
import { Link, Route, Switch, useLocation, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import queryString from 'query-string';

const Topmenu = ({listUpdate}) => {

    const { search } = useLocation();
    const { no } = queryString.parse(search);
    const his = useHistory();

    const goList = (e) =>{
        e.preventDefault();

        listUpdate();
        his.push('/list/1');        
    }

    return(
        <>
            <ul className="top-menu">

                <Switch>
                    <Route path="/list">
                        <li>
                            <Link to="/post/write">
                                <Button variant="contained" color="primary" disableElevation>글쓰기</Button>
                            </Link>
                        </li>
                    </Route>  
                    <Route path="/post/write" exact={true}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button variant="contained" color="primary" disableElevation>목록</Button>
                            </a>
                        </li>
                    </Route>
                    <Route path="/post/update" exact={false}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button variant="contained" color="primary" disableElevation>목록</Button>
                            </a>
                        </li>
                    </Route>
                    <Route path="/post/delete" exact={false}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button variant="contained" color="primary" disableElevation>목록</Button>
                            </a>    
                        </li>
                    </Route>
                    <Route path="/post" exact={false}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button variant="contained" color="primary" disableElevation>목록</Button>
                            </a>
                        </li>
                        <li>
                            <Link to={`/post/delete/usercheck?no=${no}`}>
                                <Button variant="contained" color="primary" disableElevation>삭제</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/post/update/usercheck?no=${no}`}>
                                <Button variant="contained" color="primary" disableElevation>수정</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/post/write">
                                <Button variant="contained" color="primary" disableElevation>글쓰기</Button>
                            </Link>
                        </li>
                    </Route>            
                </Switch>
            </ul>
        </>
    )
}

export default Topmenu;