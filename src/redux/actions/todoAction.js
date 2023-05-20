export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"

// let myId = 0

export const addTodo = (newTodo) => {
    // localStorage.setItem("datas", JSON.stringify(newTodo));
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}