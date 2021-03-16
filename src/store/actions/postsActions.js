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

export const createEntry = (entryData) => {
    return (dispatch, getState) => {
        fetch(postsApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(entryData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'CREATE ENTRY SUCCESS',
                    time: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE ENTRY ERROR',
                    time: new Date(),
                    error
                })
            })
    }
}

export const editEntry = (entryId, entryToUpdate) => {
    const editEntryApiUrl = `https://radiant-dusk-52143.herokuapp.com/api/v1/entries/${entryId}/edit`
    return (dispatch, getState) => {
        fetch(editEntryApiUrl, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(entryToUpdate)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'EDIT ENTRY SUCCESS',
                    editTime: new Date(),
                    response
                }) 
            })
            .catch((error) => {
                dispatch({
                    type: 'EDIT ENTRY ERROR',
                    editTime: new Date(),
                    error
                })
            })
    }
}

export const deleteEntry = (entryId) => {
    const deleteEntryApiUrl = `https://radiant-dusk-52143.herokuapp.com/api/v1/entries/${entryId}/delete`
    return (dispatch, getState) => {
        fetch(deleteEntryApiUrl, {
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
                    type: 'DELETE ENTRY SUCCESS',
                    deleteTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'DELETE ENTRY ERROR',
                    deleteTime: new Date(),
                    error
                })
            })
    }
}