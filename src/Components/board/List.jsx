import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Pagination } from '@material-ui/lab';


const List = ({post, postCnt}) => {
    const his = useHistory();
    const [currentPage, setCurrentPage] = useState(1); //게시판 처음 진입했을때
    //전체 포스팅 중 params(=currentPage)로 지금 페이지에 랜더링될 게시글만(10개) state에 저장
    const [renderPost, setRenderPost] = useState( currentPage > 1 ? post.slice((currentPage-1)*10, currentPage*10) : post.slice(0, currentPage*10) );
    const [pagiCnt, setPagiCnt] = useState( postCnt > 10 ? Number((postCnt/10)+1.0).toFixed(0) : 1 );
    

    const pagiHandler = (e, value) =>{ //페이지 이동
        setRenderPost(value > 1 ? post.slice((value-1)*10, value*10) : post.slice(0*10, value*10));
        setCurrentPage(value);
    }


    return(
        <> 
            {
                
                renderPost.map((post, idx) =>
                    <li key={ idx + post._id}>
                        <Link to={'/post'+ '?no='+post._id} >
                            <span className="list-title">
                                {post.title}
                            </span>
                            <span className="list-nic">
                                {post.nicName}
                            </span>
                            <span className="list-date">
                                {post.createdAt.substr(0, 10)}
                            </span>
                        </Link>
                    </li>
                )
            }
            <Pagination count={pagiCnt} color="primary" page={currentPage} onChange={pagiHandler}/>
        </>
    )
}

export default List;