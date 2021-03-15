import authReducer from './authReducer';
import entriesReducer from './entriesReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    entry: entriesReducer
})

export default rootReducer;