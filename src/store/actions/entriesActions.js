export const createEntry = (entry) => {
    return (dispatch, getState) => {
        // async call to db
        dispatch({
            type: 'CREATE ENTRY',
            entry
        })
    }
}