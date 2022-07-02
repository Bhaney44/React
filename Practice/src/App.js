import React, { useState, useRef } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import TodoList from './TodoList'
import uuidv4 from 'uuidv4'

function App() {
  const [todos, setTodos]= useState([])

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return[...prevTodos, {id: 1, name: name, complete:
      false}]
    })
    console.log(name)
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button> onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed </button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
