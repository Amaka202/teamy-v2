// import { logDOM } from "@testing-library/react";

const iniState = {}

const postsReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET POSTS':
            console.log(' successful');  
            return {
                ...state,
                postsData: action.response.data,
                getPostsSuccessTime: action.getPostsSuccessTime
            } 
        case 'GET POSTS ERROR':
            console.log('signup error');  
            return {
                ...state,
                getPostsErrorTime: action.getPostsErrorTime
             } 
         case 'CREATE POST SUCCESS':
            console.log('login success');  
            return {
                ...state,
                entryCreated: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'CREATE POST ERROR':
            console.log('login error');  
            return {
                ...state,
                postStatus: 'error',
                time: action.time

             }

         case 'EDIT POST SUCCESS':
            console.log('edit success'); 
            console.log(action.response); 
            return {
                ...state,
                editedData: action.response,
                timeEdited: action.editTime,
            }
        case 'EDIT POST ERROR':
            console.log('edit error');  
            return {
                ...state,
                authStatus: 'error',
             }     
             
         case 'DELETE POST SUCCESS':
            console.log('delete success');  
            return {
                ...state,
                timeEntryDeleted: action.deleteTime,
            }
        case 'DELETE POST ERROR':
            console.log('delete error');  
            return {
                ...state,
                authStatus: 'error',
             } 
        default:
            return state;
    }
}

export default postsReducer;