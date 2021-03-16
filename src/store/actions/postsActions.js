import {getToken} from '../../components/helpers/token';
const postsApiUrl = 'https://teamy-api.herokuapp.com/api/v1/posts'

export const getPosts = () => {
    return (dispatch, getState) => {
        fetch(postsApiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'GET POSTS',
                    getPostsSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET POSTS ERROR',
                    getPostsErrorTime: new Date(),
                    error
                })
            })
    }
}

export const createPost = (postData) => {
    return (dispatch, getState) => {
        fetch(postsApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(postData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'CREATE POST SUCCESS',
                    createPostSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE POST ERROR',
                    createPostsErrorTime: new Date(),
                    error
                })
            })
    }
}

export const editPost = (postId, postDataToUpdate) => {
    const editPostAPiUrl = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}`
    return (dispatch, getState) => {
        fetch(editPostAPiUrl, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(postDataToUpdate)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'EDIT POST SUCCESS',
                    editPostSuccessTime: new Date(),
                    response
                }) 
            })
            .catch((error) => {
                dispatch({
                    type: 'EDIT POST ERROR',
                    editPostErrorTime: new Date(),
                    error
                })
            })
    }
}

export const deletePost = (postId) => {
    const deletePostAPiUrl = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}`
    return (dispatch, getState) => {
        fetch(deletePostAPiUrl, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'DELETE POST SUCCESS',
                    deletePostSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'DELETE POST ERROR',
                    deletePostErrorTime: new Date(),
                    error
                })
            })
    }
}