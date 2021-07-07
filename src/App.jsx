import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import List from "./components/List";
import Load from "./components/Load";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    
    return(
        <>
            <BrowserRouter>
                <Header/>                
                    <Main/>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;