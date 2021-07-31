// types.js -> reducer.js -> rootReducer.js

import { TOGGLE_LOADER, TOGGLE_MOUNT } from "./types";

const initialState = {
    isLoader : true,
    isMount : 'unmount'
}

const loaderReducer = (state = initialState, action) => {

    switch(action.type){

        case TOGGLE_LOADER : {
            
            return {
                ...state,
                isLoader : action.data,
            }

        }
        case TOGGLE_MOUNT : {

            return {
                ...state,
                isMount : action.data
            }

        }
        default : return state
        
    }
}

export default loaderReducer;