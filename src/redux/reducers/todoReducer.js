import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, FILTER_ACTIVE_TODO, FILTER_COMPLETE_TODO } from "../actions/todoAction"

const initialState = {
    todos : [
        // { id: 1, title: "belajar react", isDone: false },
        // { id: 2, title: "belajar redux", isDone: false },
        // { id: 3, title: "belajar hooks", isDone: false },
    ],
    filter: [
        // { id: 1, title: "belajar react", isDone: false },
        // { id: 2, title: "belajar redux", isDone: false },
        // { id: 3, title: "belajar hooks", isDone: false },
    ],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? Object.assign(todo, action.payload) : todo)
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, isDone: !todo.isDone} : todo)
            }
        case FILTER_ACTIVE_TODO:
            return {
                ...state,
                filter: state.todos.filter((todo) => !todo.isDone)
            }
        case FILTER_COMPLETE_TODO:
            return {
                ...state,
                filter: state.todos.filter((todo) => todo.isDone)
            }
        default:
            return state
    }
}

export default todoReducer