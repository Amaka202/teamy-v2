const signUpApiUrl = 'https://teamy-api.herokuapp.com/api/v1/signup';
const loginApiUrl = 'https://teamy-api.herokuapp.com/api/v1/login';

export const createUser = (userData) => {
    return (dispatch, getState) => {
        fetch(signUpApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then((data) => data.json())
            .then((response) => {
                console.log("got here!");
                dispatch({
                    type: 'CREATE USER SUCCESS',
                    signUpSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE USER ERROR',
                    signUpErrorTime: new Date(),
                    error
                })
            })
    }
}

export const loginUser = (userData) => {
    return (dispatch, getState) => {
        fetch(loginApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'LOGIN USER SUCCESS',
                    loginSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'LOGIN USER ERROR',
                    loginErrorTime: new Date(),
                    error
                })
            })
    }
}
