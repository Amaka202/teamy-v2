// import { logDOM } from "@testing-library/react";

const iniState = {}
 
const commentsReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET COMMENTS':
            return {
                ...state,
                commentsData: action.response.data,
                getCommentsSuccessTime: action.getCommentsSuccessTime
            } 
        case 'GET COMMENTS ERROR':
            return {
                ...state,
                getCommentsErrorTime: action.getCommentsErrorTime
             } 
         case 'CREATE COMMENT SUCCESS':
            return {
                ...state,
                commentCreated: action.response,
                postStatus: 'success',
                postCommentsSuccessTime: action.postCommentsSuccessTime
            }
        case 'CREATE COMMENT ERROR':
            return {
                ...state,
                postStatus: 'error',
                postCommentsErrorTime: action.postCommentsErrorTime

             }
        default:
            return state;
    }
}

export default commentsReducer;