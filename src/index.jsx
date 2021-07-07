import React from "react";
import ReactDom from "react-dom";
import App from  "./App";
import style from "./app.css" ;

ReactDom.render(<App/>, document.querySelector("#root"));

if(module.hot){
    module.hot.accept();
}