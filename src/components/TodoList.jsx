export const TodoList = () => {
    return (
        <>
            <div className="container bg-danger">
                <h1 className='text-center pt-4'>Todolist App</h1>
                <div className="todo-input d-flex justify-content-center mt-lg-5 mt-4">
                    <form>
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-7 col-md-12">
                            <input type="text" name="" id="" className="form-control py-lg-2 py-1" placeholder='New Todo' />
                        </div>
                        <div className="col-lg-2 col-md-12 pt-lg-0 pt-2">
                            <button type='submit' className='btn btn-primary py-lg-2 py-1 w-100'>Add</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}