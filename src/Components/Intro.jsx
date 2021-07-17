import React from 'react';

const Intro = ()=> {    


    return(
        <>
            <div className="intro">
                <h3 className="introTxt">리액트와 Node.js, MongoDB를 연동한 간단한 텍스트 게시판입니다. </h3>
                <div className="img-wrap">
                    <img className="reactIcon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react Icon" />
                    <span>&#43;	</span>
                    <img className="nodeIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png" alt="Nodejs Icon" />
                    <span>&#43;	</span>
                    <img className="mongoIcon" src="https://linux.systemv.pe.kr/wp-content/uploads/2016/06/mongodb.png" alt="mongoDB Icon" />
                </div>
            </div>
        </>
    )

}

export default Intro;