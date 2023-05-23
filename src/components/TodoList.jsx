import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, editTodo } from "../redux/actions/todoAction"

export const TodoList = () => {
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState("")
    const [updateTodo, setUpdateTodo] = useState(null)
    const {todos} = useSelector(state => state)
    // console.log(todos);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inputTodo);
        if (!updateTodo) {           
            // let id = 0
            // if (todos.length > 0) {
            //     let max = 0
            //     for (let todo of todos) {
            //         if (todo.id > max) max = todo.id
            //     }
            //     id = max + 1
            // }

            const newTodo = {
                id: Date.now(),
                title: inputTodo,
                isDone: false
            }
    
            dispatch(addTodo(newTodo))

            // console.log(newTodo);
        } else {
            updateTodo.title = inputTodo
            dispatch(editTodo(updateTodo))
            setUpdateTodo(null)
        }

        setInputTodo("")

    }

    const handleEdit = (todoId, updateTitle) => {
        const todo = {id: todoId, title: updateTitle}
        setInputTodo(updateTitle)
        setUpdateTodo(todo)
    }

    return (
        <>
            <div className="container box">
                <h1 className='text-center pt-4'>Todolist App</h1>
                <div className="todo-input d-flex justify-content-center mt-lg-5 mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-7 col-md-12">
                            <input 
                                type="text" 
                                name="todo" 
                                className="form-control py-lg-2 py-1" 
                                placeholder='New Todo' 
                                value={inputTodo} 
                                onChange={e => setInputTodo(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-2 col-md-12 pt-lg-0 pt-2">
                            {updateTodo ? (<button type='submit' className='btn btn-primary py-lg-2 py-1 w-100'>Update</button>) : (<button type='submit' className='btn btn-primary py-lg-2 py-1 w-100'>Add</button>)}
                        </div>
                        </div>
                    </form>
                </div>

                
                
                <div className="todo-lists d-flex justify-content-center mt-4">
                    <div className="todos">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">ALL</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="active-tab" data-bs-toggle="tab" data-bs-target="#active-tab-pane" type="button" role="tab" aria-controls="active-tab-pane" aria-selected="false">ACTIVE</button>
                            </li>
                            <li className="nav-item" rol="presentation">
                                <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed-tab-pane" type="button" role="tab" aria-controls="completed-tab-pane" aria-selected="false">COMPLETED</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
                                <ul className="list-group">
                                    {todos.map((item, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input type="checkbox" className='form-check-input' name="" id="" />
                                                <label className="form-check-label">
                                                    {item.title}
                                                </label>
                                            </div>
                                            <div className="btn-group">
                                                <button 
                                                    onClick={() => handleEdit(item.id, item.title)} className="btn" style={{padding: "7px", border: "none"}}
                                                >
                                                    <FontAwesomeIcon icon={faPen} size="sm" style={{color: "green"}} />
                                                </button>
                                                <button onClick={() => dispatch(deleteTodo(item))} className="btn" style={{padding: "7px", border: "none"}}>
                                                    <FontAwesomeIcon icon={faTrash} size="sm" style={{color: "red"}} />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="active-tab-pane" role="tabpanel" aria-labelledby="active-tab" tabIndex="0">...</div>
                            <div className="tab-pane fade" id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab" tabIndex="0">...</div>
                        </div>                     
                    </div>
                </div>
            </div>
        </>
    )
}