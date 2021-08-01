import React from 'react';
import reactIcon from '../images/react.png';
import nodejsIcon from '../images/nodejs.png';
import mongoDBIcon from '../images/mongodb.png';

const Intro = ()=> {    


    return(
        <>
            <div className="intro mount1">
                <h3 className="introTxt">리액트와 Node.js, MongoDB를 연동한 간단한 텍스트 게시판입니다. </h3>
                <div className="img-wrap">
                    <img className="reactIcon" src={reactIcon} alt="react Icon" />
                    <span>&#43;	</span>
                    <img className="nodeIcon" src={nodejsIcon} alt="Nodejs Icon" />
                    <span>&#43;	</span>
                    <img className="mongoIcon" src={mongoDBIcon} alt="mongoDB Icon" />
                </div>
            </div>
        </>
    )

}

export default Intro;