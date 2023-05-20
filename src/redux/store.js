import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

// const allReducer = combineReducers({
//     todoRed
// })

const store = createStore(todoReducer)

export default store