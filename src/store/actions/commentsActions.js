import {getToken} from '../../components/helpers/token';

export const getComments = (postId) => {
    const commentsApiUrl = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}/comment`;
    return (dispatch, getState) => {
        fetch(commentsApiUrl, {
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
                    type: 'GET COMMENTS',
                    getCommentsSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET COMMENTS ERROR',
                    getCommentsErrorTime: new Date(),
                    error
                })
            })
    }
}

export const createComment = (postId, comment) => {
    const commentsApiUrl = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}/comment`;

    return (dispatch, getState) => {
        fetch(commentsApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(comment)
        })
            .then((data) => data.json())
            .then((response) => {
                console.log('here');
                dispatch({
                    type: 'CREATE COMMENT SUCCESS',
                    postCommentsSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE COMMENT ERROR',
                    postCommentsErrorTime: new Date(),
                    error
                })
            })
    }
}

