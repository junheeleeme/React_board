import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { currentSetpost } from '../../redux/index';

const Post = ({ currentPost, currentSetpost })=> {
    
    const ele_body = useRef(null);
    const { search } = useLocation();
    const { no } = queryString.parse(search);

    console.log("search : " + search);
    console.log("no : " + no);

    useEffect(()=>{
        currentSetpost(no);
    }, []);
    
    useEffect(()=>{
        ele_body.current.innerText = currentPost[0].body;
    }, [currentPost]);

    return(
        <>
            {
                currentPost.map((v, idx)=> 
                    <div className={`post-wrap mount2`}>

                        <div className="post-title-wrap">
                            <h2 className="post-title">{v.title}</h2>
                            <span className="post-date">{v.createdAt.substr(0, 10)}</span>
                            <span className="post-nic">{v.nicName}</span>
                        </div>

                        <div ref={ele_body} className="post-content" ></div>

                    </div>
                )
            }
        </>
    )

}

const mapStateToProps = ({posts}) => ({
    currentPost : posts.currentPost
});

const mapDispatchToProps = ({currentSetpost});

export default connect(mapStateToProps, mapDispatchToProps)(Post);