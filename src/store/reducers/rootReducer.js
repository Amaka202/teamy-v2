import authReducer from './authReducer';
import {combineReducers} from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer
})

export default rootReducer;