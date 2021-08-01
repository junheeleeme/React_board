// types.js -> reducer.js -> rootReducer.js

import { SET_POST, SET_PAGENUM, /*ADD_POST, DEL_POST, EDIT_POST,*/ CURRENT_SET_POST } from "./types";

const initialState = {
    post : [],              //모든 글 정보
    postTotal : 0,          //모든 글 수
    pageNum : 1,            //페이지 수, 1페이지 = 글 12개
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
        case SET_PAGENUM : {  //*
            return {
                ...state,
                pageNum : action.data
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