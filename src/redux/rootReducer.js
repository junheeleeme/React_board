// types.js -> reducer.js -> rootReducer.js

import { combineReducers } from "redux";
import loaderReducer from "./loader/reducer";
import postReducer from "./post/reducer";

const rootReducer = combineReducers({
    loader : loaderReducer,
    posts : postReducer
})

export default rootReducer;