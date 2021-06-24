const React = require("react");
const ReactDom = require("react-dom");
const { memo } = React;


const Footer = memo( () =>{

    return(
        <>
            <footer className="footer">
                <div className="footer_wrap">
                    <p className="footer_txt">Copyright ⓒ 2020 AD COMMUNICATION All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
})

module.exports = Footer;