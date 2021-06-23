const React = require('react');
const ReactDom = require('react-dom');
const { useState } = React;

    const NotFound = () => {
    
    const [title, setTitle] = useState('Not Found - 404');





    return(
        <>
            <div>
                {title}
            </div>
        </>
        
    )
}

module.exports = NotFound;