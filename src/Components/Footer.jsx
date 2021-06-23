const React = require("react");
const ReactDom = require("react-dom");
const { memo } = React;


const Footer = memo( () =>{

    return(
        <>
            <footer className="footer">
                <div className="footer_wrap">
                    footer
                </div>
            </footer>
        </>
    )
})

module.exports = Footer;