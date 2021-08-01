import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import downArrow from '../../images/down-arrow24.png';
import { connect } from "react-redux";

const btnStyle = makeStyles({ //Material-UI 
    button: {
        border : 'none', background : '#8b8b8c', color : '#fff',
        height : 50, margin: '0 auto',
        padding: '0 22px 0 12px', fontSize : 16, transition: "0.3s ease",
        "&:hover" : {
            background : "#656566"
        }
    }
});

const List = ({allPost, postTotal}) => {
    
    const { button } = btnStyle(); //style
    const [current, setCurrent] = useState(1);
    const [isVisible, setIsvisible] = useState(true); // 모든 글 랜더링 완료
    const [renderPost, setRenderPost] = useState([]);

    useEffect(()=>{
        setRenderPost( 
            allPost.filter((v, idx) => idx < current*12 ) //로딩 글 개수 * 12
        );
        if(current*12 > postTotal){
            setIsvisible(false);
        }
    }, [current]);

    const onclickMoreBtn = () => {
        if(isVisible){
            setCurrent(current+1);
        }
    }

    return(
        <> 
            <ul className="post-list mount2">  
                {
                    renderPost.map((post, idx) =>
                        <li key={ idx + post._id}>
                            <Link to={'/post?no='+post._id} >
                                <span className="list-title">{post.title}</span>
                                <span className="list-nic">{post.nicName}</span>
                                <span className="list-date">{post.createdAt.substr(0, 10)}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>

            <div className="btn-center-wrap mount1">
                <Fab onClick={onclickMoreBtn} variant="extended" className={button} aria-label="Add">
                    <img src={downArrow} className="downArrow" alt="downArrow"/>
                    <p>{ isVisible ? "이전 게시물" : "이전 게시물 없음"}</p>
                </Fab>
            </div>           

        </>
    )
}

const mapStateToProps = ({posts}) => ({
    allPost : posts.post,
    postTotal : posts.postTotal
})

export default connect(mapStateToProps)(List);