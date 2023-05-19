import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      {/* <div className="todo-input d-flex justify-content-center mt-lg-5 mt-4">
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
      </div> */}
    </>
  )
}

export default App
