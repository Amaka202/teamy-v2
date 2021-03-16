export const RESET_AUTH_STATE = "RESET_AUTH_STATE";
export const RESET_ENTRIES_STATE = "RESET_ENTRIES_STATE";
export const RESET_REMINDERS_STATE = "RESET_REMINDERS_STATE";

export const resetAuthState = () => {
    console.log('here');
    return (dispatch, getState) => {
        dispatch({
            type: RESET_AUTH_STATE
        })
    }
};

export const resetEntriesState = () => {
    return {
        type: RESET_REMINDERS_STATE
    }
}

export const resetRemindersState = () => ({
    type: RESET_REMINDERS_STATE
});