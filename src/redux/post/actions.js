// types.js -> actions.js -> index.js

import { SET_POST, /* ADD_POST, DEL_POST, EDIT_POST,*/ CURRENT_SET_POST } from "./types";

export const setPost = (post, {count}) => ({ //post : 모든 글, count: 모든 글수
    type : SET_POST,
    data : [post, count]
});

// export const addPost = (post) => ({
//     type : ADD_POST,
//     data : post
// });

// export const delPost = (idx) => ({
//     type : DEL_POST,
//     data : idx
// });

// export const editPost = (idx, post) => ({
//     type : EDIT_POST,
//     data : [idx, post]
// });

export const currentSetpost = (id) => ({
    type : CURRENT_SET_POST,
    data : id
});