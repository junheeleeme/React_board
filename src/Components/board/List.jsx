import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Pagination } from '@material-ui/lab';


const List = ({post, postCnt}) => {
    const his = useHistory();
    const params = useParams();
    const [currentPage, setCurrentPage] = useState(Number(params.no)); //TypeScript의 필요성이..
    const [renderPost, setRenderPost] = useState( currentPage === 1 ? post.slice(0, (postCnt%12)) : post.slice((currentPage-2)*12+(postCnt%12), (currentPage-1)*12+(postCnt%12)) );
    const [pagiCnt, setPagiCnt] = useState( postCnt > 12 ? Number((postCnt/15)+1.0).toFixed(0) : 1 );


    const pagiHandler = (e, value) =>{ //페이지 이동
        his.push(`/list/${value}`);
        setCurrentPage(value);
    }

    useEffect(()=>{
        setRenderPost( currentPage === 1 ? post.slice(0, (postCnt%12)) : post.slice((currentPage-2)*12+(postCnt%12), (currentPage-1)*12+(postCnt%12)) );
        
    }, [currentPage]);



    return(
        <> 
            <ul className="post-list mount">  
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

            <Pagination count={pagiCnt} color="info" page={currentPage} onChange={pagiHandler}/>
        </>
    )
}

export default List;