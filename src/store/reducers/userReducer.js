
const iniState = {}

const userReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET USER':
            return {
                ...state,
                userData: action.response.data,
                getUserSuccessTime: action.getPostsSuccessTime
            } 
        case 'GET USER ERROR':
            return {
                ...state,
                getUserErrorTime: action.getPostsErrorTime
             } 
        default:
            return state;
    }
}

export default userReducer;