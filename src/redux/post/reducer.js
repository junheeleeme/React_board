// types.js -> reducer.js -> rootReducer.js

import { SET_POST, /*ADD_POST, DEL_POST, EDIT_POST,*/ CURRENT_SET_POST } from "./types";

const initialState = {
    post : [],
    postTotal : 0,
    currentPost : [{
        _id : '',
        title : '',
        body : '',
        nicName : '',
        createdAt : ''
    }]
}

const postReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_POST : {  //*
            return {
                ...state,
                post : action.data[0],
                postTotal : action.data[1]
            }
        }
        // case ADD_POST : {
        //     return {
        //         ...state,
        //         post : state.post.push(action.data)
        //     }
        // }
        // case DEL_POST : {
        //     return {
        //         ...state,
        //         isLoader : action.data
        //     }
        // }
        // case EDIT_POST : {
        //     return {
        //         ...state,
        //         isLoader : action.data
        //     }
        // }
        case CURRENT_SET_POST : { //*
            return {
                ...state,
                currentPost : state.post.filter((v, idx) => v._id === action.data)
            }
        }

        default : return state
        
    }
}

export default postReducer;