import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { Link, useHistory, useParams } from "react-router-dom";
import { Pagination } from '@material-ui/lab';


const List = ({post, postCnt}) => {
    const his = useHistory();
    const params = useParams();
    const [pagiCnt, setPagiCnt] = useState( postCnt > 10 ? Number((postCnt/10)+1.0).toFixed(0) : 1 );
    const [currentPage, setCurrentPage] = useState(Number(params.no));

    const pagiHandler = (e, value) =>{ //페이지 이동
        his.push(`/list/${value}`);
        setCurrentPage(value);
    }


    return(
        <> 
            {
                post.map((post, idx) =>
                    <li key={post._id + idx}>
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