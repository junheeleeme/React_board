import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Load from "./Load";
import List from "./board/List";
import Post from "./board/Post";
import Write from "./board/Write";
import Edit from "./board/Edit";
import UserCheck from "./board/UserCheck";
import Intro from "./Intro";
import Topmenu from "./Topmenu";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import boardImg from '../images/boardImg.png';
import axios from "axios";
import { connect } from 'react-redux';
import { toggleLoader, setPost } from '../redux/index';


const btnStyle = makeStyles({ //Material-UI 
    button: {
        border : 'none',
        background : '#637bfe',
        color : '#fff',
        height : 50,
        fontSize : 16,
        "&:hover" : {
            background : "#5075c7"
        }
    }
});

const Main = (({isloader, toggleLoader, setPost}) => {

    const { button } = btnStyle();

    useEffect(()=>{

        console.log(" _   _  _        _                _ " + '\n' +
                    "| | | |(_)      (_)              (_)" +'\n' +
                    "| |_| | _        _  _   _  _ __   _ " +'\n'+
                    "|  _  || |      | || | | || '_ \\ | |" +'\n' +
                    "| | | || | _    | || |_| || | | || |" +'\n'+
                    "\\_| |_/|_|(_)   | | \\__,_||_| |_||_|" +'\n' +
                    "               _/ |                 " +'\n'+
                    "              |__/                  ");

        axios.get('/post/list')
            .then((res) => { //res.post[0] : 포스트, res.post[1] : 전체 포스팅 수
                setPost(res.data[0], res.data[1]); //모든 포스팅 리덕스에 저장
                toggleLoader(false);  //로딩 종료
            }).catch((err) => {
                console.log(err);
            });

    }, []);


    const listUpdate = () =>{
        toggleLoader(true);
        console.log("Rerender");
        axios.get('/post/list')
            .then((res) => {  //res.post[0] : 포스트, res.post[1] : 전체 포스팅 수
                setPost(res.data[0], res.data[1]); //모든 포스팅 리덕스에 저장
                toggleLoader(false);  //로딩 종료
            }).catch((err) => {
                console.log(err);
                toggleLoader(true);
            });
    }

    if(isloader){ //로딩중
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
                    <Link to="/list" className="start-Btn mount1">
                        <Fab variant="extended" className={button} aria-label="Add" >
                            <img className="start-btnImg" src={boardImg} alt="Board-Img" />게시판으로 이동
                        </Fab>
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
                    <Route path="/list" exact={false}>
                        <List/> 
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
                        {/* <Edit listUpdate={listUpdate} post={post}/>  */}
                    </Route>
                    <Route path="/post" exact={false}>
                        <Post/>
                    </Route>
                </Switch>                        

            </article>
        </>
        )
    }
})

const mapStateToProps = ({ loader }) => ({
    isloader : loader.isLoader
});

const mapDispatchToProps = ({ toggleLoader, setPost });

export default connect(mapStateToProps, mapDispatchToProps)(Main);