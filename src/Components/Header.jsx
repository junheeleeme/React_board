import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

const Header = (() => {
    return(
        <>
            <div className="header">
                <div className="header-wrap">
                    <Link to ="/" className="title">
                        <h2>Simple-React-Board</h2>
                    </Link>
                </div>
            </div>
        </>
    )
})

export default Header;