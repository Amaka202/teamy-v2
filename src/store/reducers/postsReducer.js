// import { logDOM } from "@testing-library/react";

const iniState = {}

const postsReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET POSTS':
            return { 
                ...state,
                postsData: action.response.data,
                getPostsSuccessTime: action.getPostsSuccessTime
            } 
        case 'GET POSTS ERROR':
            return {
                ...state,
                getPostsErrorTime: action.getPostsErrorTime
             } 
         case 'CREATE POST SUCCESS':
            return {
                ...state,
                postCreated: action.response,
                authStatus: 'success',
                createPostSuccessTime: action.createPostSuccessTime
            }
        case 'CREATE POST ERROR':
            return {
                ...state,
                postStatus: 'error',
                createPostsErrorTime: action.createPostsErrorTime

             }

         case 'EDIT POST SUCCESS':
            console.log(action.response); 
            return {
                ...state,
                editedData: action.response,
                editPostSuccessTime: action.editPostSuccessTime,
            }
        case 'EDIT POST ERROR':
            return {
                ...state,
                authStatus: 'error',
                editPostErrorTime: action.editPostErrorTime
             }     
             
         case 'DELETE POST SUCCESS':
            return {
                ...state,
                deletePostSuccessTime: action.deletePostSuccessTime,
            }
        case 'DELETE POST ERROR':
            return {
                ...state,
                deletePostErrorTime: action.deletePostErrorTime,
             } 
        default:
            return state;
    }
}

export default postsReducer;