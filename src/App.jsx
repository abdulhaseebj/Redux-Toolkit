import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editedTodo, removeTodo } from './config/redux-config/reducers/todoslice'

const App = () => {
  // useRef
  const todo = useRef()

  // dipatch
  const dispatch = useDispatch()

  // selector
  const selector = useSelector(state => state.todos)
  // add todo function
  function addTodoReducer(e) {
    e.preventDefault()
    if (todo.current.value == '') {
      alert('Add Todo')
    } else {
      dispatch(addTodo({
        title: todo.current.value
      }))
    }
    console.log(selector);
    todo.current.value = ''
  }
  // delete todo function
  const deleteTodo = (index) => {
    dispatch(removeTodo({
      index: index
    }))
  }
  // edit todo function
  const editTodo = (index) => {
    const userVal = prompt('Enter Edited value')
    if (userVal == '') {
      alert('Add Edited value In Promt')
      return
    }
    dispatch(editedTodo({
      title: userVal,
      index: index
    }))
  }




  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addTodoReducer}>
        <input type="text" placeholder='enter todo' ref={todo} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {selector.map((item, index) => {
          return <li key={item.id}>{item.title}
            <div className='btn'>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => editTodo(index)}>Edit</button>
            </div>
          </li>
        })}
      </ul>
    </>
  )
}

export default App