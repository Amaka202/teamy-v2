const iniState = {
    enteries: [
        {id: 1, title: "beach day", entry: "had fun today at the beach"},
        {id: 2, title: "none day", entry: "had fun today at the beach"},
        {id: 3, title: "sun day", entry: "had fun today at the beach"}
    ]
}

const entriesReducer = (state = iniState, action) => {
    return state;
}

export default entriesReducer;