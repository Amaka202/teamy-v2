import {RESET_AUTH_STATE} from '../actions/resetStateAction';

const iniState = {}

const authReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE USER SUCCESS':
            console.log('i am here?');
            return {
                data: action.response,
                authStatus: 'success',
                signUpSuccessTime: action.signUpSuccessTime
            }
        case 'CREATE USER ERROR':
            return {
                ...state,
                serverError: 'server error',
                signUpErrorTime: action.signUpErrorTime

             } 
         case 'LOGIN USER SUCCESS':
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
                loginSuccessTime: action.loginSuccessTime
            }
        case 'LOGIN USER ERROR':
            return {
                ...state,
                authStatus: 'error',
                loginErrorTime: action.loginErrorTime
             }
        case 'RESET_AUTH_STATE':
            console.log('here too why!');
           return iniState    
         
        default:
            return state;
    }
}

export default authReducer;