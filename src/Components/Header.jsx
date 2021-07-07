import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className="header">
                <div className="header_wrap">
                    <h1 className="title"><Link to ="/">React</Link></h1>
                </div>
            </div>
        </>
    )
}

export default Header;