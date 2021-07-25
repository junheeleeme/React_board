import React from "react";
import { Link, Route, Switch, useLocation, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string';

const btnStyle = makeStyles({
    button: {
        border : '1px solid #2196f3',
        background : '#fff',
        color : '#2196f3',
        height : 35,
        "&:hover" : {
            background : "#e3f2fd"
        }
    }
});

const Topmenu = ({listUpdate}) => {
    const { button } = btnStyle();
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
                                <Button className={button} variant="contained" disableElevation>글쓰기</Button>
                            </Link>
                        </li>
                    </Route>  
                    <Route path="/post/write" exact={true}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button className={button} variant="contained" disableElevation>목록</Button>
                            </a>
                        </li>
                    </Route>
                    <Route path="/post/update" exact={false}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button className={button} variant="contained" disableElevation>목록</Button>
                            </a>
                        </li>
                    </Route>
                    <Route path="/post/delete" exact={false}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button className={button} variant="contained" disableElevation>목록</Button>
                            </a>    
                        </li>
                    </Route>
                    <Route path="/post" exact={false}>
                        <li>
                            <a href="/" onClick={goList}>
                                <Button className={button} variant="contained" disableElevation>목록</Button>
                            </a>
                        </li>
                        <li>
                            <Link to={`/post/delete/usercheck?no=${no}`}>
                                <Button className={button} variant="contained" disableElevation>삭제</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/post/update/usercheck?no=${no}`}>
                                <Button className={button} variant="contained" disableElevation>수정</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/post/write">
                                <Button className={button} variant="contained" disableElevation>글쓰기</Button>
                            </Link>
                        </li>
                    </Route>            
                </Switch>
            </ul>
        </>
    )
}

export default Topmenu;