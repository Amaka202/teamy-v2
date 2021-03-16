export const getToken = () => {
    return localStorage.getItem('teamyToken')
}

export const saveToken = (token) => {
    localStorage.setItem('teamyToken', token)
}

export const deleteToken = () => {
    localStorage.removeItem('teamyToken')
}