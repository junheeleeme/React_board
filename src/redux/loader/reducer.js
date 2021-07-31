// types.js -> reducer.js -> rootReducer.js

import { TOGGLE_LOADER } from "./types";

const initialState = {
    isLoader : true
}

const loaderReducer = (state = initialState, action) => {

    switch(action.type){

        case TOGGLE_LOADER : {

            return {
                ...state,
                isLoader : action.data
            }

        }
        default : return state
        
    }
}

export default loaderReducer;