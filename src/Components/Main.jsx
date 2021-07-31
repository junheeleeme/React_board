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
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import boardImg from '../images/boardImg.png';
import axios from "axios";
import { connect } from 'react-redux';
import { toggleLoader } from '../redux/index';


const btnStyle = makeStyles({ //Material-UI 
    button: {
        border : 'none',
        background : '#637bfe',
        color : '#fff',
        height : 50,
        fontSize : 16,
        "&:hover" : {
            background : "#3d5afe"
        }
    }
});

const Main = (({isloader, toggleLoader}) => {

    const { button } = btnStyle();
    const [post, setPost] = useState([]);
    const [postCnt, setPostCnt] = useState(0);

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
            .then((res) => {            
                setPost(res.data[0]);           //post[0] : 포스트
                setPostCnt(res.data[1].count);  //post[1] : 전체 포스팅 개수
                
                toggleLoader(false);

            }).catch((err) => {
                console.log(err);
            });

    }, []);

    const listUpdate = () =>{
        setNowload(true);
        console.log("Second Rendering");
        axios.get('/post/list')
            .then((res) => {            //post[0] : 포스트
                setPost(res.data[0]);   //post[1] : 전체 포스팅 개수
                setPostCnt(res.data[1].count);
                setNowload(false);
            }).catch((err) => {
                console.log(err);
                setNowload(true);
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
                    <Link to="/list/1" className="start-Btn">
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
                    <Route path="/list/:no" exact={false}>
                        <List post={post} postCnt={postCnt}/>
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

const mapStateToProps = ({loader}) => ({
    isloader : loader.isLoader
})

const mapDispatchToProps = ({ toggleLoader })

export default connect(mapStateToProps, mapDispatchToProps)(Main);