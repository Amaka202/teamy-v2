export const getToken = () => {
    localStorage.getItem('teamyToken')
}

export const saveToken = (token) => {
    localStorage.setItem('teamyToken', token)
}

export const deleteToken = () => {
    localStorage.removeItem('teamyToken')
}