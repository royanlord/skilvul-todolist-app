export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const EDIT_TODO = "EDIT_TODO"

// let myId = 0

export const addTodo = (todo) => {
    // localStorage.setItem("datas", JSON.stringify(newTodo));
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}