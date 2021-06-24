const { useEffect } = require("react");
const React = require("react");
const ReactDom = require("react-dom");
const { useState, memo } = React;

const Home = memo( () => {
    
    const [title, setTitle] = useState('Home');
    

    return(
        <div className="home">

            {title}

        </div>
    )
})

module.exports = Home;