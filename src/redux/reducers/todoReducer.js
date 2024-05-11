import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, FILTER_ACTIVE_TODO, FILTER_COMPLETE_TODO } from "../actions/todoAction"

// const initialState = {
//     todos : [
//         // { id: 1, title: "belajar react", isDone: false },
//         // { id: 2, title: "belajar redux", isDone: false },
//         // { id: 3, title: "belajar hooks", isDone: false },
//     ],
//     filter: [
//         // { id: 1, title: "belajar react", isDone: false },
//         // { id: 2, title: "belajar redux", isDone: false },
//         // { id: 3, title: "belajar hooks", isDone: false },
//     ],
// }
const initialState = {
    todos : JSON.parse(localStorage.getItem('todos')) || [],
    filter: JSON.parse(localStorage.getItem('filter')) || [],
}

const todoReducer = (state = initialState, action) => {
    let newTodos
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state.todos, action.payload];
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        case EDIT_TODO:
            newTodos = state.todos.map((todo) => todo.id === action.payload.id ? Object.assign(todo, action.payload) : todo);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? Object.assign(todo, action.payload) : todo)
            }
        case COMPLETE_TODO:
            newTodos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, isDone: !todo.isDone} : todo);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, isDone: !todo.isDone} : todo)
            }
        case FILTER_ACTIVE_TODO:
            const activeTodos = state.todos.filter((todo) => !todo.isDone);
            localStorage.setItem('active', JSON.stringify(activeTodos));
            return {
                ...state,
                filter: state.todos.filter((todo) => !todo.isDone)
            }
        case FILTER_COMPLETE_TODO:
            const completedTodos = state.todos.filter((todo) => todo.isDone);
            localStorage.setItem('complete', JSON.stringify(completedTodos));
            return {
                ...state,
                filter: state.todos.filter((todo) => todo.isDone)
            }
        default:
            return state
    }
}

export default todoReducer