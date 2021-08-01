import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import arrowdown from '../../images/arrowdown.png';
import { connect } from "react-redux";
import { setPageNum } from '../../redux/index';
 
const btnStyle = makeStyles({ //Material-UI 
    button: {
        border : 'none', color : '##423F3E', 
        height : 45, fontSize : 14 ,margin: '0 auto',
        padding: '0 15px', fontSize : 16, transition: "0.3s ease",
        // "&:hover" : {
        //     background : "#656566"
        // }
    }
});

const List = ({allPost, postTotal, pageNum, setPageNum}) => {
    
    const { button } = btnStyle(); //style
    const [isVisible, setIsvisible] = useState(true); // 모든 글 랜더링 완료
    const [renderPost, setRenderPost] = useState([]);

    useEffect(()=>{
        setRenderPost( 
            allPost.filter((v, idx) => idx < pageNum*12 ) //로딩 글 개수 * 12
        );
        if(pageNum*12 > postTotal){

            setIsvisible(false);
        }
    }, [pageNum]);

    const onclickMoreBtn = () => {
        if(isVisible){
            setPageNum(pageNum+1);
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
                <Fab onClick={onclickMoreBtn} variant="extended" color="extended" className={button} aria-label="Add">
                    { isVisible ? <img src={arrowdown} className="downIcon" alt="downArrow"/> : <></> }
                    { isVisible ? "이전 게시물" : "이전 게시물 없음" }
                </Fab>
            </div>           

        </>
    )
}

const mapStateToProps = ({posts}) => ({
    allPost : posts.post,
    postTotal : posts.postTotal,
    pageNum : posts.pageNum
})

const mapDispatchToProps = ({ setPageNum });

export default connect(mapStateToProps, mapDispatchToProps)(List);