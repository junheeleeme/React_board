import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles({
    header: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', //linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 60,
        padding: '0',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)' //0 3px 5px 2px rgba(255, 105, 135, .3)
    },
});

const Header = (() => {

    const { header } = headerStyle();

    return(
        <>
            <div className={header}>
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