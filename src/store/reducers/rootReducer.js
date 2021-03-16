import authReducer from './authReducer';
import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer
})

export default rootReducer;