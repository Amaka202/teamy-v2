// import { logDOM } from "@testing-library/react";

const iniState = {}

const entriesReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET ENTRIES':
            console.log(' successful');  
            return {
                ...state,
                entriesData: action.response.data,
            }
        case 'GET ENTRIES ERROR':
            console.log('signup error');  
            return {
                ...state,
             } 
         case 'CREATE ENTRY SUCCESS':
            console.log('login success');  
            return {
                ...state,
                entryCreated: action.response,
                authStatus: 'success',
                time: action.time
            }
        case 'CREATE ENTRY ERROR':
            console.log('login error');  
            return {
                ...state,
                postStatus: 'error',
                time: action.time

             }

         case 'EDIT ENTRY SUCCESS':
            console.log('edit success'); 
            console.log(action.response); 
            return {
                ...state,
                editedData: action.response,
                timeEdited: action.editTime,
            }
        case 'EDIT ENTRY ERROR':
            console.log('edit error');  
            return {
                ...state,
                authStatus: 'error',
             }     
             
         case 'DELETE ENTRY SUCCESS':
            console.log('delete success');  
            return {
                ...state,
                timeEntryDeleted: action.deleteTime,
            }
        case 'DELETE ENTRY ERROR':
            console.log('delete error');  
            return {
                ...state,
                authStatus: 'error',
             } 
        default:
            return state;
    }
}

export default entriesReducer;