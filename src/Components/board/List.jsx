import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Pagination } from '@material-ui/lab';

const List = ({post, postCnt}) => {
    const his = useHistory();
    const params = useParams();
    const [currentPage, setCurrentPage] = useState(Number(params.no));
    const [renderPost, setRenderPost] = useState( currentPage === 1 ? post.slice(0, (postCnt%10)) : post.slice((currentPage-2)*10+(postCnt%10), (currentPage-1)*10+(postCnt%10)) );
    const [pagiCnt, setPagiCnt] = useState( postCnt > 10 ? Number((postCnt/10)+1.0).toFixed(0) : 1 );
    
    const pagiHandler = (e, value) =>{ //페이지 이동
        his.push(`/list/${value}`);
        setCurrentPage(value);
    }

    useEffect(()=>{
        setRenderPost( currentPage === 1 ? post.slice(0, (postCnt%10)) : post.slice((currentPage-2)*10+(postCnt%10), (currentPage-1)*10+(postCnt%10)) );
    }, [currentPage])

    return(
        <> 
            <ul className="post-list">  
                {
                    
                    renderPost.map((post, idx) =>
                        <li key={ idx + post._id}>
                            <Link to={'/post?no='+post._id} >
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
            </ul>
            <Pagination count={pagiCnt} color="primary" page={currentPage} onChange={pagiHandler}/>
        </>
    )
}

export default List;