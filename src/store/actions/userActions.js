import {getToken} from '../../components/helpers/token';
const userApiUrl = 'https://teamy-api.herokuapp.com/api/v1/user'

export const getUser = () => {
    return (dispatch, getState) => {
        fetch(userApiUrl, {
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
                    type: 'GET USER',
                    getUserSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET USER ERROR',
                    getUserErrorTime: new Date(),
                    error
                })
            })
    }
}

