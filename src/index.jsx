import React from "react";
import ReactDom from "react-dom";
import App from  "./App";
import style from "./app.css" ;
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector("#root"));

if(module.hot){
    module.hot.accept();
}