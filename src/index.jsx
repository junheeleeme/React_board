const React = require("react");
const ReactDom = require("react-dom");
const { BrowserRouter, Switch, Route, Link } = require('react-router-dom');
const App = require("./App");
const Style = require("./app.css");

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector("#root")
);

if(module.hot){
    module.hot.accept();
}