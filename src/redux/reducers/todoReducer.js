const initialState = {
    todos : [
        { id: 1, title: "belajar react", isDone: false },
        { id: 2, title: "belajar redux", isDone: false },
        { id: 3, title: "belajar hooks", isDone: false },
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default todoReducer